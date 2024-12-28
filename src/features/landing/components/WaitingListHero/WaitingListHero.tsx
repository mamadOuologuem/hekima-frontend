'use client';

import { TypewriterText } from '@/components/atoms/TypewriterText';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PhoneInput } from 'react-international-phone';

import 'react-international-phone/style.css';
import { LogoWhatsApp } from '@/components/atoms/logos';
import { registerUserToWhatsAppWaitingList } from './action';

const PROMPTS = ['Bonjour', 'I ni ce', 'Hello', 'Hola', '你好', 'Ciao', 'Olá', 'Hallo', 'مرحبا'];
const WAITING_LIST_SUBSCRIPTION_TARGET = 2_000;

const INTERVAL_DURATION = 3_000;
const TYPE_SPEED = 200;

const FormSchema = z.object({ phoneNumber: z.string() });

interface WaitingListHeroProps {
  currentUserWaitingListPosition?: number;
  totalWaitingListSubscribers: number;
}

export const WaitingListHero = ({
  currentUserWaitingListPosition,
  totalWaitingListSubscribers
}: WaitingListHeroProps) => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [isLoading, startTransition] = useTransition();
  const { toast } = useToast();
  const subscriptionLeftBeforeOpening = WAITING_LIST_SUBSCRIPTION_TARGET - totalWaitingListSubscribers;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { phoneNumber: '' }
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    startTransition(() =>
      registerUserToWhatsAppWaitingList(data.phoneNumber)
        .then(() => {
          form.reset();
          toast({ title: 'You have joined it!', description: 'We will notify you when we are ready' });
        })
        .catch(() => {
          toast({ title: 'Something went wrong', description: 'Please try again later', variant: 'destructive' });
        })
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % PROMPTS.length);
    }, INTERVAL_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="flex flex-col items-center gap-y-10 text-center">
      <h1 className="flex flex-col items-center text-9xl">
        <TypewriterText as="p" typeSpeed={TYPE_SPEED}>
          {PROMPTS[currentPromptIndex]}
        </TypewriterText>
        <p>Hekima</p>
      </h1>
      {currentUserWaitingListPosition ? (
        <div>
          {subscriptionLeftBeforeOpening > 0 ? (
            <span>
              Waiting for <span className="font-bold">{subscriptionLeftBeforeOpening}</span> to join before the grand
              opening
            </span>
          ) : (
            <span>
              We reached the {WAITING_LIST_SUBSCRIPTION_TARGET} subscribers! 🎉
              <br />
              Stay turned for the launch
            </span>
          )}
        </div>
      ) : (
        <p className="text-xl">Join the waiting list with your Whatsapp</p>
      )}

      <div className="mt-10 w-fit">
        {currentUserWaitingListPosition ? (
          <div>
            <p>You are in position</p>
            <CountUp className="text-6xl font-medium" start={1} end={currentUserWaitingListPosition} />
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex h-fit w-full flex-col gap-6 text-black md:flex-row"
            >
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative flex items-center">
                        <PhoneInput
                          defaultCountry="ml"
                          countrySelectorStyleProps={{ buttonClassName: '!h-11 !px-4 !rounded-tl-md !rounded-bl-md' }}
                          disableCountryGuess
                          placeholder="WhatsApp number"
                          inputClassName="!h-11 w-44 !rounded-r-md border border-primary/60 !pr-8 text-sm !text-primary placeholder:text-primary/60 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        />
                        <LogoWhatsApp className="absolute right-2 w-6 text-[#25d366] opacity-80" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" isLoading={isLoading}>
                Join the waiting list
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
};