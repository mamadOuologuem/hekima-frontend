import { cn } from '@/lib/utils';

interface ManThoughtsIllustrationProps {
  primaryColor?: string;
  secondaryColor?: string;
  animated?: boolean;
  className?: string;
}

export const ManThoughtsIllustration = ({
  primaryColor = '#23292E',
  secondaryColor = '#811C00',
  animated = false,
  className
}: ManThoughtsIllustrationProps) => (
  <svg viewBox="0 0 311 429" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M73.0183 199.833C69.3091 200.033 61.7918 198.306 62.8176 193.173C63.2095 191.214 65.2826 191.344 66.8686 191.46C72.417 191.864 77.9754 193.594 83.5071 193.911C84.2329 194.544 86.9588 194.647 86.1884 195.905C85.7115 196.684 74.5614 199.75 73.0183 199.833Z"
      fill={secondaryColor}
    />
    <path
      d="M165.48 198.999C165.118 201.515 166.484 200.589 168.197 200.835C172.433 201.443 174.086 205.988 173.911 209.771C173.582 216.914 165.699 228.874 158.937 231.434C154.95 232.943 149.944 231.301 148.304 227.186C147.685 225.633 148.632 225.181 146.171 225.434C146.501 231.186 152.718 234.7 157.984 233.59C165.685 231.966 174.068 219.512 175.369 212.116C176.63 204.95 173.492 198.439 165.48 198.999Z"
      fill={secondaryColor}
    />
    <path
      d="M51.3081 232.848C50.4827 232.866 48.9238 232.964 49.265 234.162C49.329 234.387 52.1712 236.321 52.6391 236.576C53.9774 237.303 57.1269 238.358 57.9459 236.483C59.1713 233.676 53.0794 232.809 51.3081 232.848Z"
      fill={secondaryColor}
    />
    <path
      d="M206.335 290.983C205.992 288.342 205.75 285.728 205.597 283.148L198.207 287.366C198.207 287.366 154.13 329.23 149.274 332.594C144.419 335.958 124.621 368.851 124.621 368.851C111.921 348.666 109.68 316.147 109.68 316.147C109.68 316.147 102.957 332.968 94.3654 349.788C85.7742 366.608 62.0004 380.863 62.0004 380.863C0.0548096 416.403 0.0548096 428.11 0.0548096 428.11H310.609C305.654 400.972 237.312 361.387 225.236 345.099C213.16 328.812 206.335 290.983 206.335 290.983Z"
      fill={primaryColor}
    />
    <path
      className={cn(
        animated &&
          'animate-[appearing-svg-path_3s_linear_forwards] [--start-dashoffset:1300] [stroke-dasharray:1500] [stroke-dashoffset:1500]'
      )}
      d="M205.499 283C203.499 239 221.386 213.422 224 207C233.675 183.23 227.011 158.755 215.346 137.1C201.545 111.478 176.977 102.186 148.613 103.488C132.294 104.238 121.799 109.534 107.95 117.215C101.393 120.851 94.5396 125.307 91.4167 132.432C87.1722 142.114 90.2475 148.653 98.491 154.312C109.065 161.571 122.555 163.63 133.855 169.787C145.933 176.367 159.083 188.103 171.691 192.561C188.008 198.33 219.257 184.043 215.913 163.853C212.548 143.531 193.488 120.306 173.36 114.924C148.625 108.31 124.983 113.757 104.215 127.914C93.773 135.031 95.5255 141.245 105.881 146.916C113.91 151.313 123.037 153.897 131.115 158.313C144.826 165.808 155.667 181.17 171.538 184.274C184.288 186.768 209.624 182.609 207.956 165.153C207.206 157.303 200.529 145.228 195.547 139.144C188.313 130.309 181.114 126.164 169.854 124.209C156.221 121.84 139.39 120.283 126.092 124.708C121.994 126.072 110.498 130.498 107.41 132.889C103.373 136.016 107.719 139.328 110.986 140.474C123.224 144.771 136.808 142.799 147.064 153.014C152.672 158.6 156.581 165.309 163.044 170.561C171.975 177.819 176.968 177.098 187.565 174.235C195.409 172.115 197.849 170.573 195.811 161.759C190.282 137.847 168.047 128.714 145.273 129.466C139.289 129.663 130.68 129.764 124.965 130.911C124.252 131.054 121.638 131.587 121.969 132.573C123.1 135.931 133.929 136.762 137.008 137.31C143.765 138.512 154.231 139.827 159.242 144.825C165.469 151.035 166.391 170.975 178.687 167.126C186.007 164.835 184.375 158.839 181.387 153.537C176.927 145.624 169.767 139.725 161.266 136.579C159.766 136.024 154.087 134.139 152.828 134.139H141.398"
      stroke={primaryColor}
      strokeWidth="2"
    />
    <path
      d="M108.385 319.306C108.385 319.306 113.173 305.656 102.303 293.691"
      stroke={secondaryColor}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M42.3791 238.356C31.8582 233.727 36.7006 224.277 42.1945 217.655C46.0326 213.029 54.8873 206.673 52.5223 199.773C49.826 191.906 44.9763 189.095 46.8086 179.402C48.5508 170.186 50.0646 158.995 52.6815 150.185C56.532 137.222 69.8184 119.873 81.445 112.999C93.0441 106.141 106.008 102.505 119.257 100.262L119.315 100.381C127.471 99.0019 135.736 98.1468 143.855 97.3968C150.432 96.7891 158.784 97.0584 165.056 95.5134C166.799 95.0844 167.563 94.5286 168.054 92.738C168.921 89.5751 166.873 88.1057 164.365 86.6381C154.004 80.5748 139.524 80.6946 127.898 78.9298C111.977 76.5134 83.9567 70.4659 79.0383 52.5276C74.9144 37.4884 82.4322 20.4834 94.2639 11.1159C113.98 -4.49365 139.585 0.0810242 162.743 2.74182C191.961 6.09885 238.523 13.0985 258.604 36.5285C267.885 47.3572 270.025 63.6419 268.698 77.5111C266.882 96.4949 256.864 103.62 238.624 105.167C226.29 106.212 213.001 99.653 202.035 94.474C187.765 87.7359 170.803 77.049 155.333 74.5746C134.647 71.2653 100.353 74.2761 87.5368 54.018C82.5712 46.1696 81.9858 36.3051 89.6031 29.997C94.0235 26.3363 99.7917 21.9214 104.56 18.7547C129.746 2.02841 153.29 6.52274 181.301 11.2697C199.872 14.4175 229.986 19.2198 244.39 31.651C249.379 35.9568 252.339 42.0859 254.825 48.0848C261.101 63.2326 263.216 78.9702 247.686 89.1357C235.06 97.4007 216.691 90.307 203.997 85.1795C186.182 77.9836 165.884 66.0618 146.524 65.1761C138.818 64.8235 130.352 66.2838 122.822 64.9072C112.612 63.041 84.0374 51.1433 96.4632 37.1478C104.851 27.7 121.428 19.2881 133.745 16.8653C148.533 13.9566 158.946 17.2686 173.178 19.3989C192.736 22.326 225.895 23.3525 239.046 39.8859C244.104 46.2443 251.479 59.2111 250.443 67.4607C249.52 74.8056 240.731 80.2415 233.939 81.1525C221.045 82.8812 200.122 70.6708 187.742 65.9076C169.295 58.81 151.142 60.723 131.868 59.1854C124.396 58.5897 116.585 57.8354 110.915 52.3897C101.622 43.4637 110.095 34.7752 118.366 29.6843C132.792 20.806 148.138 23.2958 164.047 24.7604C180.829 26.3054 202.651 27.6927 217.356 36.2704C222.53 39.2881 235.382 47.3654 238.829 51.654C243.741 57.7659 240.562 69.4828 232.581 71.1304C216.405 74.4689 205.866 63.6479 192.721 57.3711C183.368 52.9047 173.113 50.6038 162.709 50.9599C149.783 51.4023 128.34 54.5145 117.254 46.9341C111.861 43.2464 117.307 39.1824 120.952 37.1595C133.211 30.3561 147.379 29.9399 160.931 31.6553C180.758 34.1654 196.864 29.7814 213.979 42.7598C217.802 45.6585 229.402 54.8113 231.131 58.6914C232.019 60.6839 231.741 62.7847 229.289 63.1716C216.435 65.2015 201.243 51.983 189.518 47.471C184.703 45.6186 181.184 45.3368 176.045 45.183C166.196 44.8888 154.997 44.7926 145.174 45.1848C142.727 45.2823 140.083 45.7805 137.646 45.8694C135.246 45.9566 133.194 45.3437 135.19 42.7451C138.833 38.0038 151.642 35.5144 157.382 35.1889C169.722 34.4888 186.079 39.2035 197.449 43.9761C202.429 46.0661 208.092 48.723 211.431 53.0808C211.422 53.2028 210.119 53.814 209.95 53.8286C209.731 53.8475 208.39 52.2089 207.99 51.864C203.287 47.8138 194.029 44.4288 188.083 42.4647C174.527 37.9867 160.113 34.7495 146.008 38.9114C142.646 39.9031 138.836 41.491 136.416 44.0809C145.457 43.4719 154.539 43.0879 163.616 43.1841C171.676 43.2692 182.356 42.8534 189.8 45.634C200.828 49.7538 216.945 63.1909 228.623 61.3939C230.562 61.0958 229.298 59.2923 228.619 58.3178C225.473 53.8036 211.692 42.8006 206.702 40.047C194.464 33.2947 181.108 35.2791 167.825 34.3075C162.411 33.9115 157.022 32.5612 151.618 32.3129C144.146 31.9697 136.624 33.1801 129.711 35.4844C126.236 36.6428 118.514 39.6836 116.869 43.066C116.444 43.94 117.164 44.6449 117.92 45.1577C131.912 54.6532 158.213 47.5659 174.899 49.8844C180.773 50.7009 187.059 52.7518 192.428 55.221C204.512 60.778 215.376 71.3039 229.686 69.7886C238.012 68.9068 242.508 58.9917 237.296 52.5212C234.373 48.8927 222.454 41.4944 217.99 38.746C202.677 29.3175 182.222 28.3765 164.717 26.7555C151.098 25.494 140.099 23.1288 126.883 27.7679C120.469 30.0189 111.818 35.4788 109.096 41.9089C109.027 42.0726 108.716 42.0816 108.68 42.2418C108.222 44.2626 109.191 46.9127 110.267 48.5955C113.587 53.7869 120.652 56.3133 126.542 56.964C147.766 59.3082 168.49 56.4464 188.855 64.3493C201.569 69.2831 216.902 78.5454 230.416 79.6191C237.121 80.1517 247.792 74.593 248.706 67.2773C249.764 58.8065 240.077 42.4097 233.736 36.9821C219.807 25.059 190.487 23.831 172.723 21.1865C163.632 19.8332 154.471 17.1938 145.174 17.4189C131.151 17.7591 117.373 23.0381 106.157 31.2374C102.482 33.9248 95.4472 39.2077 95.1824 44.0393C94.7253 52.3807 111.275 59.6149 117.825 61.6898C128.436 65.0511 137.679 62.6506 148.288 63.4104C165.776 64.6629 183.759 74.7271 199.745 81.439C210.675 86.0274 227.38 93.0949 239.225 90.6635C249.313 88.5932 257.223 79.3404 257.822 69.07C258.34 60.1861 251.379 41.2909 245.183 34.8547C232.595 21.7775 201.092 16.5131 183.526 13.4851C153.969 8.3894 129.575 3.25204 103.365 21.7792C99.2836 24.6642 94.1699 28.4628 90.3662 31.6489C83.7666 37.1766 84.9469 46.2748 89.0472 52.9502C100.412 71.4529 133.099 69.9497 152.061 72.2956C170.185 74.5381 185.794 84.811 202.03 92.4798C214.105 98.1833 226.905 104.726 240.62 103.166C262.45 100.682 268.02 88.1603 266.926 67.5152C266.171 53.2483 263.906 43.1571 252.944 33.3072C231.262 13.8243 188.556 7.27008 160.275 4.10162C138.214 1.63068 113.257 -2.22888 94.8069 12.9924C83.4438 22.3668 75.9046 40.2188 81.6506 54.5772C87.014 67.9799 109.771 73.8569 122.609 76.2269C135.127 78.5376 148.269 78.2344 160.281 82.7279C165.152 84.5503 173.695 89.0657 169.45 95.4684C167.102 99.0105 160.551 98.0248 156.727 98.2842C146.033 99.0092 135.41 100.043 124.846 101.524C116.28 102.724 106.909 104.593 98.1002 107.56L97.8852 107.512C91.6577 109.624 85.7135 112.281 80.5449 115.652C72.0336 121.203 60.6516 135.452 56.5775 144.754C52.6695 153.677 51.7647 164.179 50.0118 173.724C49.083 178.784 47.3528 182.335 48.8538 187.674C50.0153 191.806 52.9494 195.361 54.2375 199.167C57.1986 207.919 46.2176 214.783 41.9023 220.917C37.7118 226.873 34.9181 233.818 43.8054 236.929C45.8742 237.653 48.6414 237.207 48.5332 240.198C48.4594 242.248 44.5943 247.321 43.9165 250.254C42.7066 255.487 47.0502 258.511 51.63 259.421C50.0075 261.249 48.1284 262.661 47.8602 265.307C47.6138 267.729 47.81 270.825 50.2526 272.014C52.6438 273.178 54.3156 271.79 56.478 272.448C57.1411 272.649 59.7743 274.82 60.1653 275.421C61.2903 277.152 60.5491 283.101 60.7336 285.515C61.4521 294.919 68.0153 295.507 75.9252 295.856C85.7521 296.289 95.4996 295.471 105.019 293.19C109.594 292.094 112.372 291.315 116.59 288.999C124.922 284.422 134.642 278.045 140.405 270.407C141.865 268.473 143.083 266.524 143.526 264.087C145.028 263.821 144.793 265.697 144.525 266.755C142.519 274.663 126.939 285.53 120.06 289.584C117.569 291.051 114.954 292.3 112.446 293.737C113.007 293.963 102.129 296.014 97.2186 296.712C90.5748 297.655 82.4137 297.934 75.7033 297.633C68.3294 297.302 60.9422 296.643 59.2764 288.083C58.7927 285.597 58.9597 283.705 58.964 281.307C58.9695 278.248 59.7155 276.705 56.9376 274.876C54.6486 273.368 53.7417 274.621 51.3171 274.281C49.4178 274.015 47.2456 272.392 46.5755 270.585C45.3768 267.353 45.8407 262.857 48.301 260.31C42.6705 257.809 40.7052 253.969 42.8083 248.035C43.3204 246.591 46.9142 240.473 46.7245 239.795C46.5884 239.309 43.2543 238.741 42.3791 238.356Z"
      fill={secondaryColor}
    />
  </svg>
);
