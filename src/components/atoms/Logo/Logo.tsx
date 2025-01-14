import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('flex items-center space-x-1 h-[23px] md:h-[28px]', className)}>
      <svg width="100%" height="100%" viewBox="0 0 198 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M71.6099 34.9189C71.7964 34.8798 71.8899 34.8601 71.8899 35.0684V4.80681C71.8899 3.71431 71.6154 3.49334 71.1726 3.49334H67.8048C67.4179 3.49334 67.1966 3.71431 67.1966 4.10038V21.0237H54.5563V4.04452C54.5563 3.71431 54.3375 3.49334 53.8949 3.49334H50.5268C50.0283 3.49334 49.9189 3.71431 49.9189 4.86266V35.1218C49.9189 34.8669 50.0193 34.8863 50.2216 34.9252C50.3181 34.9438 50.4374 34.9666 50.5803 34.9666H53.9481C54.335 34.9666 54.5563 34.7483 54.5563 34.3061V25.0886H67.1991V34.3595C67.1991 34.7456 67.4179 34.9666 67.8607 34.9666H71.2285C71.3826 34.9666 71.5096 34.94 71.6099 34.9189ZM82.0598 19.4841C82.0598 16.232 84.3218 14.4128 87.3585 14.4128L87.3612 14.4104C90.7828 14.4104 92.604 16.6715 92.604 19.4282V21.2778H82.0598V19.4841ZM97.0765 20.9068C97.0765 15.2844 93.0468 10.6069 87.3612 10.6069C81.6757 10.6069 77.6467 15.2844 77.6467 20.9068V26.43C77.6467 31.8873 81.5668 35.4723 87.4736 35.4723C91.0628 35.4723 94.3747 34.0395 96.1402 30.8405C96.3055 30.5103 96.1402 30.2335 95.6973 29.9592L93.7646 28.6356C93.3218 28.3585 92.9908 28.3585 92.6599 28.8007C91.3912 30.5103 89.5692 31.613 87.3612 31.613C83.4976 31.613 82.0625 29.0775 82.0625 26.0998V25.0886H95.8043C96.5068 25.0886 97.0765 24.5199 97.0765 23.8184V20.9068ZM182.088 25.0886V26.6537C182.088 29.4104 183.91 31.6716 187.332 31.6716L187.334 31.6688C190.369 31.6688 192.633 29.8499 192.633 26.5979V25.0886H182.088ZM177.62 22.548C177.62 21.8465 178.189 21.2778 178.891 21.2778H192.633V19.9794C192.633 17.0017 191.198 14.4662 187.334 14.4662C185.126 14.4662 183.304 15.5689 182.035 17.2788C181.704 17.7207 181.374 17.7207 180.931 17.4439L179.001 16.1203C178.558 15.846 178.392 15.5689 178.558 15.2386C180.323 12.04 183.635 10.6069 187.224 10.6069C193.132 10.6069 197.051 14.1894 197.051 19.6492V26.651C197.051 31.6688 193.241 35.4723 187.337 35.4723C182.094 35.4723 177.621 31.6688 177.621 26.7731V25.0886H177.62V22.548ZM128.269 11.4124V34.512C128.269 34.8423 128.491 35.0074 128.821 35.0074H132.242C132.629 35.0074 132.738 34.8981 132.738 34.512V11.4124C132.738 11.0264 132.573 10.861 132.187 10.861H128.765C128.434 10.861 128.269 11.0264 128.269 11.4124ZM122.54 34.118C122.54 34.7787 122.375 35.0556 121.767 35.0556H118.842C118.234 35.0556 118.068 34.7787 118.068 34.2831L117.791 29.1563C117.625 26.2904 116.631 23.8642 112.601 23.8642C109.18 23.8642 107.303 26.2345 107.303 29.1002V34.5044C107.303 34.8905 107.137 35.0556 106.751 35.0556H103.382C103.052 35.0556 102.831 34.8905 102.831 34.5602V4.04452C102.831 3.71431 102.995 3.49334 103.327 3.49334H106.748C107.134 3.49334 107.244 3.65845 107.244 3.98867V21.1609L107.465 21.2167L116.628 11.1838C116.85 10.9626 117.071 10.9067 117.401 10.9067H121.487C121.874 10.9067 122.095 11.128 122.095 11.4023C122.095 11.5674 121.93 11.7325 121.818 11.8976L113.98 20.2767C115.913 20.2767 118.009 20.7189 119.609 22.1518C121.487 23.7497 122.148 26.2321 122.314 29.0978L122.535 34.1156L122.54 34.118ZM171.704 34.5348C171.704 34.9208 171.54 35.0859 171.209 35.0859H167.787C167.401 35.0859 167.291 34.9208 167.291 34.5906V19.8143C167.291 16.9486 165.692 14.4104 162.323 14.4104C159.507 14.4104 157.411 17.0578 157.411 19.8143V34.5348C157.411 34.9208 157.301 35.0859 156.915 35.0859H153.547C153.161 35.0859 152.995 34.9208 152.995 34.5906V19.8143C152.995 16.9486 151.504 14.4104 148.136 14.4104C144.768 14.4104 143.168 17.0017 143.168 19.8143V34.5348C143.168 34.9208 143.058 35.0859 142.672 35.0859H139.25C138.92 35.0859 138.698 34.9208 138.698 34.5906V19.8143C138.698 14.5221 142.12 10.6069 148.139 10.6069C151.064 10.6069 153.715 11.9842 155.093 13.9709H155.259C156.75 12.04 159.398 10.6069 162.601 10.6069C168.782 10.6069 171.707 14.4104 171.707 19.8143V34.5348H171.704ZM29.2997 35.1659C26.5584 35.1659 24.1398 33.7875 22.7003 31.6872C22.694 31.7022 22.6874 31.717 22.6811 31.7321C23.2676 30.3332 23.5919 28.7977 23.5919 27.1863C23.5919 24.2409 22.5095 21.548 20.7201 19.4827H27.2074C23.8088 18.5646 21.3088 15.4634 21.3088 11.7793C21.3088 7.37212 24.8864 3.79946 29.2997 3.79946C33.7128 3.79946 37.2904 7.37212 37.2904 11.7793C37.2904 15.4634 34.7903 18.5646 31.3921 19.4827C34.7903 20.401 37.2904 23.5019 37.2904 27.1863C37.2904 31.5932 33.7128 35.1659 29.2997 35.1659ZM19.3467 5.45464C19.3146 5.50529 19.2828 5.55622 19.2513 5.60742C19.2828 5.55622 19.3146 5.50502 19.3467 5.45464ZM13.8884 19.4827C17.2867 20.401 19.7868 23.5019 19.7868 27.1863C19.7868 31.5932 16.2092 35.1659 11.7961 35.1659C7.38278 35.1659 3.80518 31.5932 3.80518 27.1863C3.80518 23.5019 6.30522 20.401 9.70351 19.4827C6.30522 18.5646 3.80518 15.4634 3.80518 11.7793C3.80518 7.37212 7.38278 3.79946 11.7961 3.79946C14.5372 3.79946 16.9561 5.17809 18.3953 7.27848C18.4016 7.26342 18.4082 7.24863 18.4145 7.23357C17.828 8.63246 17.5036 10.168 17.5036 11.7793C17.5036 14.7247 18.5861 17.4176 20.3755 19.4827H13.8884ZM38.224 19.4827C40.0133 17.4176 41.0956 14.7247 41.0956 11.7793C41.0956 5.27365 35.8144 -0.000183105 29.2997 -0.000183105C25.741 -0.000183105 22.5503 1.5734 20.3875 4.06205C20.4404 4.00126 20.4939 3.94102 20.5479 3.88133C18.3892 1.49755 15.2679 -0.000183105 11.7961 -0.000183105C5.28113 -0.000183105 0 5.27365 0 11.7793C0 14.7247 1.08249 17.4176 2.87184 19.4827C1.08249 21.548 0 24.2409 0 27.1863C0 33.692 5.28113 38.9658 11.7961 38.9658C15.4551 38.9658 18.7251 37.3019 20.8887 34.6906C20.778 34.8242 20.6644 34.9556 20.5479 35.0843C22.7063 37.4681 25.828 38.9658 29.2997 38.9658C35.8144 38.9658 41.0956 33.692 41.0956 27.1863C41.0956 24.2409 40.0133 21.548 38.224 19.4827Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Logo;
