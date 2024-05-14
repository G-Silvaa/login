import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maracanau-icon',
  template: `
  <svg  width="79" height="27" viewBox="0 0 79 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.1125 13.5L25.2326 10.6113H20.8083L19.9284 13.5H17.156L21.4392 1.31445H24.5852L28.885 13.5H26.1125ZM24.6184 8.45312L23.7385 5.63086C23.6831 5.44271 23.6084 5.20199 23.5144 4.90869C23.4258 4.60986 23.3345 4.30827 23.2404 4.00391C23.1519 3.69401 23.0799 3.42562 23.0246 3.19873C22.9693 3.42562 22.8918 3.70785 22.7922 4.04541C22.6981 4.37744 22.6068 4.69287 22.5183 4.9917C22.4297 5.29053 22.3661 5.50358 22.3273 5.63086L21.4558 8.45312H24.6184ZM30.5594 13.5L27.0233 4.21973H29.6712L31.4642 9.50732C31.5638 9.81722 31.6413 10.1437 31.6966 10.4868C31.7575 10.8299 31.799 11.137 31.8211 11.4082H31.8875C31.9041 11.1149 31.9429 10.8022 32.0037 10.4702C32.0701 10.1382 32.1559 9.81722 32.2611 9.50732L34.0457 4.21973H36.6937L33.1575 13.5H30.5594ZM38.6918 4.21973V13.5H36.1601V4.21973H38.6918ZM37.4301 0.583984C37.8064 0.583984 38.1301 0.672526 38.4013 0.849609C38.6725 1.02116 38.808 1.34489 38.808 1.8208C38.808 2.29118 38.6725 2.61768 38.4013 2.80029C38.1301 2.97738 37.8064 3.06592 37.4301 3.06592C37.0483 3.06592 36.7218 2.97738 36.4506 2.80029C36.185 2.61768 36.0522 2.29118 36.0522 1.8208C36.0522 1.34489 36.185 1.02116 36.4506 0.849609C36.7218 0.672526 37.0483 0.583984 37.4301 0.583984ZM45.961 10.7441C45.961 11.375 45.8116 11.909 45.5128 12.3462C45.2195 12.7778 44.7795 13.1071 44.1929 13.334C43.6063 13.5553 42.8759 13.666 42.0015 13.666C41.3541 13.666 40.7979 13.6245 40.3331 13.5415C39.8738 13.4585 39.4089 13.3201 38.9385 13.1265V11.0347C39.4421 11.2616 39.9817 11.4497 40.5572 11.5991C41.1382 11.743 41.6474 11.8149 42.0845 11.8149C42.577 11.8149 42.9284 11.743 43.1387 11.5991C43.3545 11.4497 43.4625 11.256 43.4625 11.0181C43.4625 10.8631 43.4182 10.7248 43.3296 10.603C43.2466 10.4757 43.064 10.3346 42.7818 10.1797C42.4996 10.0192 42.0569 9.81169 41.4537 9.55713C40.8726 9.31364 40.3939 9.06738 40.0176 8.81836C39.6469 8.56934 39.3702 8.27604 39.1876 7.93848C39.0105 7.59538 38.9219 7.16097 38.9219 6.63525C38.9219 5.77751 39.254 5.13281 39.918 4.70117C40.5876 4.264 41.4813 4.04541 42.5992 4.04541C43.1747 4.04541 43.7226 4.10352 44.2427 4.21973C44.7684 4.33594 45.308 4.52132 45.8614 4.77588L45.0977 6.60205C44.6384 6.40283 44.204 6.23958 43.7945 6.1123C43.3905 5.98503 42.9782 5.92139 42.5577 5.92139C42.1869 5.92139 41.9074 5.97119 41.7193 6.0708C41.5311 6.17041 41.4371 6.32259 41.4371 6.52734C41.4371 6.67676 41.4841 6.80957 41.5782 6.92578C41.6778 7.04199 41.8659 7.17204 42.1426 7.31592C42.4249 7.45426 42.8371 7.63411 43.3795 7.85547C43.9052 8.07129 44.3617 8.29818 44.7491 8.53613C45.1365 8.76855 45.4353 9.05908 45.6456 9.40771C45.8559 9.75081 45.961 10.1963 45.961 10.7441ZM54.5002 8.84326C54.5002 9.618 54.395 10.3042 54.1847 10.9019C53.98 11.4995 53.6784 12.0059 53.28 12.4209C52.8871 12.8304 52.4111 13.1403 51.8522 13.3506C51.2988 13.5609 50.6735 13.666 49.9762 13.666C49.3233 13.666 48.7228 13.5609 48.175 13.3506C47.6327 13.1403 47.1595 12.8304 46.7555 12.4209C46.3571 12.0059 46.0472 11.4995 45.8259 10.9019C45.61 10.3042 45.5021 9.618 45.5021 8.84326C45.5021 7.81396 45.6847 6.94238 46.05 6.22852C46.4152 5.51465 46.9354 4.97233 47.6105 4.60156C48.2857 4.23079 49.0908 4.04541 50.0261 4.04541C50.8949 4.04541 51.6641 4.23079 52.3337 4.60156C53.0088 4.97233 53.5373 5.51465 53.9191 6.22852C54.3065 6.94238 54.5002 7.81396 54.5002 8.84326ZM48.0837 8.84326C48.0837 9.45199 48.1501 9.96387 48.2829 10.3789C48.4157 10.7939 48.6232 11.1066 48.9054 11.3169C49.1877 11.5272 49.5557 11.6323 50.0095 11.6323C50.4577 11.6323 50.8202 11.5272 51.0969 11.3169C51.3791 11.1066 51.5838 10.7939 51.7111 10.3789C51.8439 9.96387 51.9103 9.45199 51.9103 8.84326C51.9103 8.229 51.8439 7.71989 51.7111 7.31592C51.5838 6.90641 51.3791 6.59928 51.0969 6.39453C50.8146 6.18978 50.4466 6.0874 49.9929 6.0874C49.3233 6.0874 48.8363 6.31706 48.5319 6.77637C48.2331 7.23568 48.0837 7.92464 48.0837 8.84326ZM61.1966 10.7441C61.1966 11.375 61.0472 11.909 60.7483 12.3462C60.455 12.7778 60.0151 13.1071 59.4285 13.334C58.8419 13.5553 58.1115 13.666 57.2371 13.666C56.5896 13.666 56.0335 13.6245 55.5687 13.5415C55.1093 13.4585 54.6445 13.3201 54.1741 13.1265V11.0347C54.6777 11.2616 55.2173 11.4497 55.7928 11.5991C56.3738 11.743 56.8829 11.8149 57.3201 11.8149C57.8126 11.8149 58.164 11.743 58.3743 11.5991C58.5901 11.4497 58.698 11.256 58.698 11.0181C58.698 10.8631 58.6538 10.7248 58.5652 10.603C58.4822 10.4757 58.2996 10.3346 58.0174 10.1797C57.7352 10.0192 57.2924 9.81169 56.6893 9.55713C56.1082 9.31364 55.6295 9.06738 55.2532 8.81836C54.8825 8.56934 54.6058 8.27604 54.4231 7.93848C54.2461 7.59538 54.1575 7.16097 54.1575 6.63525C54.1575 5.77751 54.4896 5.13281 55.1536 4.70117C55.8232 4.264 56.7169 4.04541 57.8348 4.04541C58.4103 4.04541 58.9581 4.10352 59.4783 4.21973C60.004 4.33594 60.5436 4.52132 61.097 4.77588L60.3333 6.60205C59.874 6.40283 59.4396 6.23958 59.0301 6.1123C58.6261 5.98503 58.2138 5.92139 57.7933 5.92139C57.4225 5.92139 57.143 5.97119 56.9549 6.0708C56.7667 6.17041 56.6727 6.32259 56.6727 6.52734C56.6727 6.67676 56.7197 6.80957 56.8138 6.92578C56.9134 7.04199 57.1015 7.17204 57.3782 7.31592C57.6604 7.45426 58.0727 7.63411 58.615 7.85547C59.1408 8.07129 59.5973 8.29818 59.9847 8.53613C60.372 8.76855 60.6709 9.05908 60.8812 9.40771C61.0914 9.75081 61.1966 10.1963 61.1966 10.7441ZM5.66701 26.5L2.74514 16.979H2.67043C2.6815 17.2059 2.6981 17.549 2.72023 18.0083C2.7479 18.4621 2.77281 18.9463 2.79494 19.4609C2.81708 19.9756 2.82814 20.4404 2.82814 20.8555V26.5H0.528828V14.3643H4.03176L6.90383 23.6445H6.95363L10 14.3643H13.5029V26.5H11.104V20.7559C11.104 20.374 11.1096 19.9341 11.1206 19.436C11.1372 18.938 11.1566 18.4648 11.1787 18.0166C11.2009 17.5628 11.2175 17.2225 11.2285 16.9956H11.1538L8.02443 26.5H5.66701ZM18.2985 17.0288C19.5436 17.0288 20.4982 17.3 21.1622 17.8423C21.8263 18.3846 22.1583 19.2091 22.1583 20.3159V26.5H20.3903L19.9005 25.2383H19.8341C19.5685 25.5703 19.2973 25.8415 19.0206 26.0518C18.744 26.262 18.4258 26.417 18.0661 26.5166C17.7064 26.6162 17.2692 26.666 16.7545 26.666C16.2067 26.666 15.7142 26.5609 15.277 26.3506C14.8454 26.1403 14.505 25.8193 14.256 25.3877C14.007 24.9505 13.8825 24.3971 13.8825 23.7275C13.8825 22.7425 14.2283 22.0176 14.9201 21.5527C15.6118 21.0824 16.6494 20.8223 18.0329 20.7725L19.6432 20.7227V20.3159C19.6432 19.8289 19.5159 19.472 19.2614 19.2451C19.0068 19.0182 18.6526 18.9048 18.1989 18.9048C17.7506 18.9048 17.3107 18.9684 16.879 19.0957C16.4474 19.223 16.0158 19.3835 15.5841 19.5771L14.7457 17.8672C15.2383 17.6071 15.7889 17.4023 16.3976 17.2529C17.0119 17.1035 17.6455 17.0288 18.2985 17.0288ZM19.6432 22.2002L18.6637 22.2334C17.8447 22.2555 17.2747 22.4022 16.9537 22.6733C16.6383 22.9445 16.4806 23.3014 16.4806 23.7441C16.4806 24.1315 16.594 24.4082 16.8209 24.5742C17.0478 24.7347 17.3439 24.8149 17.7091 24.8149C18.2514 24.8149 18.708 24.6545 19.0787 24.3335C19.4551 24.0125 19.6432 23.556 19.6432 22.9639V22.2002ZM28.0828 17.0454C28.2101 17.0454 28.3567 17.0537 28.5227 17.0703C28.6943 17.0814 28.8326 17.098 28.9378 17.1201L28.7468 19.4941C28.6638 19.4665 28.5449 19.4471 28.3899 19.436C28.2405 19.4194 28.1104 19.4111 27.9998 19.4111C27.6733 19.4111 27.3551 19.4526 27.0452 19.5356C26.7408 19.6187 26.4669 19.7542 26.2234 19.9424C25.9799 20.125 25.7862 20.3685 25.6423 20.6729C25.504 20.9717 25.4348 21.3397 25.4348 21.7769V26.5H22.9031V17.2197H24.8206L25.1941 18.7803H25.3186C25.5012 18.4648 25.7281 18.1771 25.9993 17.917C26.276 17.6514 26.5886 17.4411 26.9373 17.2861C27.2914 17.1257 27.6733 17.0454 28.0828 17.0454ZM32.5546 17.0288C33.7997 17.0288 34.7543 17.3 35.4183 17.8423C36.0824 18.3846 36.4144 19.2091 36.4144 20.3159V26.5H34.6464L34.1566 25.2383H34.0902C33.8246 25.5703 33.5534 25.8415 33.2767 26.0518C33 26.262 32.6818 26.417 32.3221 26.5166C31.9624 26.6162 31.5253 26.666 31.0106 26.666C30.4628 26.666 29.9703 26.5609 29.5331 26.3506C29.1014 26.1403 28.7611 25.8193 28.5121 25.3877C28.2631 24.9505 28.1386 24.3971 28.1386 23.7275C28.1386 22.7425 28.4844 22.0176 29.1762 21.5527C29.8679 21.0824 30.9055 20.8223 32.2889 20.7725L33.8993 20.7227V20.3159C33.8993 19.8289 33.772 19.472 33.5175 19.2451C33.2629 19.0182 32.9087 18.9048 32.455 18.9048C32.0067 18.9048 31.5668 18.9684 31.1351 19.0957C30.7035 19.223 30.2719 19.3835 29.8402 19.5771L29.0018 17.8672C29.4943 17.6071 30.045 17.4023 30.6537 17.2529C31.2679 17.1035 31.9016 17.0288 32.5546 17.0288ZM33.8993 22.2002L32.9198 22.2334C32.1008 22.2555 31.5308 22.4022 31.2098 22.6733C30.8944 22.9445 30.7367 23.3014 30.7367 23.7441C30.7367 24.1315 30.8501 24.4082 31.077 24.5742C31.3039 24.7347 31.6 24.8149 31.9652 24.8149C32.5075 24.8149 32.9641 24.6545 33.3348 24.3335C33.7111 24.0125 33.8993 23.556 33.8993 22.9639V22.2002ZM40.9277 26.666C40.0091 26.666 39.2261 26.5 38.5786 26.168C37.9312 25.8304 37.4386 25.3102 37.1011 24.6074C36.7635 23.9046 36.5947 23.0054 36.5947 21.9097C36.5947 20.7752 36.7856 19.8511 37.1675 19.1372C37.5549 18.4178 38.0889 17.8893 38.7695 17.5518C39.4557 17.2142 40.2498 17.0454 41.1519 17.0454C41.7938 17.0454 42.3472 17.109 42.812 17.2363C43.2824 17.3581 43.6919 17.5047 44.0405 17.6763L43.2935 19.6353C42.895 19.4748 42.5243 19.3447 42.1812 19.2451C41.8381 19.14 41.495 19.0874 41.1519 19.0874C40.7091 19.0874 40.3411 19.1925 40.0479 19.4028C39.7546 19.6076 39.536 19.9175 39.3921 20.3325C39.2482 20.7476 39.1763 21.2677 39.1763 21.8931C39.1763 22.5073 39.2537 23.0164 39.4087 23.4204C39.5636 23.8244 39.7878 24.126 40.0811 24.3252C40.3743 24.5189 40.7313 24.6157 41.1519 24.6157C41.6776 24.6157 42.1452 24.5465 42.5547 24.4082C42.9642 24.2643 43.3626 24.0651 43.75 23.8105V25.9771C43.3626 26.2205 42.9559 26.3949 42.5298 26.5C42.1092 26.6107 41.5752 26.666 40.9277 26.666ZM47.84 17.0288C49.0851 17.0288 50.0397 17.3 50.7037 17.8423C51.3678 18.3846 51.6998 19.2091 51.6998 20.3159V26.5H49.9318L49.442 25.2383H49.3756C49.11 25.5703 48.8388 25.8415 48.5621 26.0518C48.2854 26.262 47.9672 26.417 47.6075 26.5166C47.2478 26.6162 46.8107 26.666 46.296 26.666C45.7482 26.666 45.2557 26.5609 44.8185 26.3506C44.3868 26.1403 44.0465 25.8193 43.7975 25.3877C43.5485 24.9505 43.4239 24.3971 43.4239 23.7275C43.4239 22.7425 43.7698 22.0176 44.4615 21.5527C45.1533 21.0824 46.1909 20.8223 47.5743 20.7725L49.1847 20.7227V20.3159C49.1847 19.8289 49.0574 19.472 48.8029 19.2451C48.5483 19.0182 48.1941 18.9048 47.7404 18.9048C47.2921 18.9048 46.8522 18.9684 46.4205 19.0957C45.9889 19.223 45.5572 19.3835 45.1256 19.5771L44.2872 17.8672C44.7797 17.6071 45.3304 17.4023 45.9391 17.2529C46.5533 17.1035 47.187 17.0288 47.84 17.0288ZM49.1847 22.2002L48.2052 22.2334C47.3862 22.2555 46.8162 22.4022 46.4952 22.6733C46.1798 22.9445 46.0221 23.3014 46.0221 23.7441C46.0221 24.1315 46.1355 24.4082 46.3624 24.5742C46.5893 24.7347 46.8854 24.8149 47.2506 24.8149C47.7929 24.8149 48.2495 24.6545 48.6202 24.3335C48.9965 24.0125 49.1847 23.556 49.1847 22.9639V22.2002ZM57.7156 17.0454C58.7061 17.0454 59.503 17.3166 60.1062 17.8589C60.7094 18.3957 61.011 19.259 61.011 20.4487V26.5H58.4792V21.0796C58.4792 20.4155 58.3575 19.9147 58.114 19.5771C57.876 19.2396 57.4997 19.0708 56.9851 19.0708C56.2104 19.0708 55.6819 19.3337 55.3996 19.8594C55.1174 20.3851 54.9763 21.1432 54.9763 22.1338V26.5H52.4446V17.2197H54.3787L54.719 18.4067H54.8601C55.0593 18.0858 55.3056 17.8257 55.5989 17.6265C55.8977 17.4272 56.227 17.2806 56.5867 17.1865C56.9519 17.0924 57.3282 17.0454 57.7156 17.0454ZM65.5492 17.0288C66.7943 17.0288 67.7489 17.3 68.4129 17.8423C69.077 18.3846 69.409 19.2091 69.409 20.3159V26.5H67.641L67.1512 25.2383H67.0848C66.8192 25.5703 66.548 25.8415 66.2713 26.0518C65.9947 26.262 65.6765 26.417 65.3168 26.5166C64.9571 26.6162 64.5199 26.666 64.0052 26.666C63.4574 26.666 62.9649 26.5609 62.5277 26.3506C62.0961 26.1403 61.7557 25.8193 61.5067 25.3877C61.2577 24.9505 61.1332 24.3971 61.1332 23.7275C61.1332 22.7425 61.479 22.0176 62.1708 21.5527C62.8625 21.0824 63.9001 20.8223 65.2836 20.7725L66.8939 20.7227V20.3159C66.8939 19.8289 66.7666 19.472 66.5121 19.2451C66.2575 19.0182 65.9033 18.9048 65.4496 18.9048C65.0013 18.9048 64.5614 18.9684 64.1297 19.0957C63.6981 19.223 63.2665 19.3835 62.8348 19.5771L61.9964 17.8672C62.489 17.6071 63.0396 17.4023 63.6483 17.2529C64.2626 17.1035 64.8962 17.0288 65.5492 17.0288ZM66.8939 22.2002L65.9144 22.2334C65.0954 22.2555 64.5254 22.4022 64.2045 22.6733C63.889 22.9445 63.7313 23.3014 63.7313 23.7441C63.7313 24.1315 63.8448 24.4082 64.0716 24.5742C64.2985 24.7347 64.5946 24.8149 64.9598 24.8149C65.5021 24.8149 65.9587 24.6545 66.3295 24.3335C66.7058 24.0125 66.8939 23.556 66.8939 22.9639V22.2002ZM78.6704 17.2197V26.5H76.728L76.3877 25.313H76.2549C76.0556 25.6284 75.8066 25.8857 75.5078 26.085C75.209 26.2842 74.8797 26.4308 74.52 26.5249C74.1603 26.619 73.7868 26.666 73.3994 26.666C72.7353 26.666 72.157 26.5498 71.6645 26.3174C71.172 26.0794 70.7874 25.7114 70.5107 25.2134C70.2396 24.7153 70.104 24.0679 70.104 23.271V17.2197H72.6357V22.6401C72.6357 23.3042 72.7547 23.805 72.9927 24.1426C73.2306 24.4801 73.6097 24.6489 74.1299 24.6489C74.6445 24.6489 75.0485 24.5327 75.3418 24.3003C75.6351 24.0623 75.8398 23.7165 75.956 23.2627C76.0778 22.8034 76.1387 22.2445 76.1387 21.5859V17.2197H78.6704ZM77.6826 13.4761V13.6504C77.5221 13.8053 77.3118 13.9963 77.0517 14.2231C76.7917 14.45 76.5122 14.688 76.2134 14.937C75.9145 15.1805 75.6212 15.4157 75.3335 15.6426C75.0457 15.8639 74.7939 16.0493 74.5781 16.1987H72.8931V15.9746C73.0757 15.7643 73.286 15.5153 73.5239 15.2275C73.7674 14.9342 74.0081 14.6326 74.2461 14.3228C74.484 14.0129 74.6833 13.7306 74.8437 13.4761H77.6826Z" fill="white"/>
  </svg>
  
  `,
  styleUrls: [],
})
export class AvisosMaracanauIconComponent {

}