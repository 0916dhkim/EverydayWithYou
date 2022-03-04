import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const MobileSideBarMenuContainer = styled.div({
  backgroundColor: '#fff',
  maxWidth: '100%',
  height: '100vh',
  padding: '0 8rem',
  position: 'fixed',
  top: 0,
  zIndex: '1',

  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
})

const MobileSideBarMenuContainer_close = styled.button({
  position: 'absolute',
  top: '5rem',
  left: '5rem',
})

const MobileSideBarMenuContainer_menu = styled.ul({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90%',
})
const MobileSideBarMenuContainer_menu_category = styled.li({
  color: '#828282',
  fontSize: '2.5rem',
  marginBottom: '8rem',
})
const MobileSideBarMenuContainer_menu_information = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& button': {
    color: '#828282',
    fontSize: '2.5rem',
    marginRight: '0.5rem',
  },
})

const MobileSideBarMenuContainer_logo = styled.div({
  flexFlow: 'nowrap',
  paddingTop: '1rem',
  borderTop: 'solid 3px #828282',
})
const MobileSideBarMenuContainer_copyright = styled.div({
  paddingBottom: '5rem',
  '& span': {
    fontSize: '1.25rem',
    color: '#7D3200',
  },
})

// ToDo 각 메뉴 누르면 해당 페이지로 이동하면서 사이드바 끄기
export default function MoblieSideBarMenu({ onClickClose }) {
  return (
    <>
      <MobileSideBarMenuContainer>
        <MobileSideBarMenuContainer_close
          type='button'
          onClick={() => onClickClose()}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L54 54M6 54L54 6" stroke="#FA625B" strokeWidth="6" />
          </svg>
        </MobileSideBarMenuContainer_close>

        <MobileSideBarMenuContainer_menu>
          <Link to="/home">
            <MobileSideBarMenuContainer_menu_category>
              Home
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/">
            <MobileSideBarMenuContainer_menu_category>
              Today is
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/custom">
            <MobileSideBarMenuContainer_menu_category>
              Selector
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/search">
            <MobileSideBarMenuContainer_menu_category>
              Search
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <MobileSideBarMenuContainer_menu_information>
            <button>About</button>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.333 37.3337L31.9997 20.0003L13.333 2.66699" stroke="#828282" strokeWidth="4" strokeLinecap="square" />
            </svg>
          </MobileSideBarMenuContainer_menu_information>
        </MobileSideBarMenuContainer_menu>

        <Link to='/home'>
          <MobileSideBarMenuContainer_logo>
            <svg width="492" height="492" viewBox="0 0 492 492" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M124.142 353.929C124.142 357.671 123.158 361.935 122.108 364.359L118.894 364.164C119.089 361.801 119.027 358.721 119.027 357.209V329.268C119.027 327.761 119.027 326.449 118.761 325.265C118.433 323.692 117.387 322.513 116.204 321.724C115.548 321.268 116.993 318.377 117.91 318.772C120.929 320.084 123.025 322.052 123.614 323.825C123.942 324.809 124.142 325.793 124.142 328.745V338.713C126.894 338.647 129.913 338.452 132.276 338.057V322.708C132.276 321.201 132.276 319.889 132.014 318.705C131.686 317.132 130.636 315.953 129.457 315.164C128.801 314.708 130.374 311.822 131.292 312.212C134.31 313.524 136.406 315.492 136.996 317.265C137.324 318.249 137.524 319.233 137.524 322.185V363.18C137.524 366.921 136.406 371.18 135.356 373.609L132.142 373.415C132.342 371.052 132.276 367.967 132.276 366.46V342.06C129.846 342.388 126.372 342.583 124.142 342.716V353.929ZM90.8861 337.924C90.6247 335.961 89.5075 333.399 87.8675 331.958C87.4114 331.564 89.2461 329.596 89.8355 329.924C92.3314 331.302 93.9047 332.743 94.7555 334.055C95.3449 334.977 95.9342 336.156 96.0675 337.601L97.1847 348.487L106.364 347.764C106.891 344.75 107.348 337.273 107.286 335.5C107.219 334.582 106.958 333.993 105.841 334.188C104.134 334.449 103.611 334.582 101.71 334.777C100.465 334.91 97.9022 333.926 96.3955 333.009C95.9342 332.743 96.3289 330.513 96.8567 330.58C98.4967 330.775 100.198 331.103 101.838 330.974L108.793 330.318C111.55 330.119 112.924 330.974 112.924 332.548C112.924 335.105 111.55 344.223 110.628 348.159L112.467 349.276L111.612 351.439L97.5127 352.161L96.7235 354.785L93.1821 354.257L90.8861 337.924Z" fill="#7D3200" />
              <path d="M168.741 324.876C163.954 325.004 161.986 327.956 161.986 331.759C161.986 335.433 164.415 338.78 169.069 338.78C173.861 338.78 176.218 335.633 176.218 331.697C176.218 329.006 176.157 327.366 174.317 325.988C173.594 325.398 174.845 322.908 175.629 323.169C178.714 324.153 181.6 327.3 181.6 331.63C181.6 337.601 177.008 342.782 169.136 342.782C161.264 342.782 156.605 337.601 156.605 331.759C156.605 326.121 161.069 321.462 166.84 321.268C167.034 320.74 166.973 320.017 166.773 319.494C166.512 318.772 165.922 317.921 164.805 317.004C164.544 316.742 165.399 315.364 165.856 315.492C168.085 316.148 171.17 318.316 171.17 320.74V322.185C171.17 324.809 169.397 324.876 168.741 324.876ZM177.992 368.361C177.992 369.279 178.386 369.479 179.237 369.479C181.205 369.412 192.618 368.823 195.832 368.884C196.949 368.884 198.65 368.951 199.573 369.345C200.229 369.607 199.506 372.887 198.589 372.887C197.538 372.887 195.504 372.82 194.453 372.887L176.941 373.476C173.922 373.543 172.81 372.036 172.81 370.724V364.753C172.81 362.919 172.221 362.263 171.626 361.735C170.514 360.751 170.842 358.193 172.677 358.393C173.594 358.455 174.973 358.721 176.157 358.655L191.896 358.26L192.157 353.145C192.224 352.289 191.768 351.961 190.978 351.961C186.52 352.028 180.877 352.751 176.418 352.684C174.778 352.684 172.088 351.9 170.776 351.177C170.314 350.977 170.97 347.964 171.626 348.03L176.218 348.62C179.237 348.948 182.189 348.62 185.73 348.353C188.288 348.159 192.224 347.831 194.52 347.764C195.965 347.702 197.994 348.948 197.733 350.649L196.621 358.655C197.016 359.049 197.733 359.572 198.128 359.833L197.338 362.001L177.992 362.457V368.361ZM198.65 334.711C198.65 338.452 197.405 342.716 196.36 345.14L193.141 344.945C193.341 342.583 193.274 339.502 193.274 337.991V322.708C193.274 321.201 193.274 319.889 193.013 318.705C192.685 317.132 191.768 315.953 190.584 315.164C189.928 314.708 191.501 311.822 192.424 312.212C195.437 313.524 197.538 315.492 198.128 317.265C198.456 318.249 198.65 319.233 198.65 322.185V334.711Z" fill="#7D3200" />
              <path d="M232.826 364.297C231.186 364.425 229.546 364.625 228.04 364.82C226.4 365.014 224.821 365.281 223.248 365.409C221.936 365.476 217.082 364.358 216.232 364.164C215.442 363.969 216.298 360.622 217.016 360.689C218.922 360.884 220.757 361.017 222.592 361.017C225.216 361.078 228.757 360.884 233.154 360.556C241.811 359.9 250.6 359.31 269.163 359.11C270.541 359.11 274.283 359.438 276.512 361.145L275.595 363.969C273.232 363.508 269.819 363.18 268.445 363.113C265.493 362.985 262.603 362.918 259.589 362.918C251.389 362.918 242.795 363.441 232.826 364.297ZM252.44 351.438C255.125 341.665 256.048 331.891 256.048 328.217C256.048 327.366 255.72 326.905 254.797 326.905C249.882 326.905 243.256 328.283 237.485 328.478C235.317 328.545 231.186 327.561 229.218 326.905C228.629 326.71 229.152 323.235 230.202 323.363C231.971 323.625 234.728 324.153 237.875 324.019C244.173 323.758 253.096 322.251 257.949 322.841C259.061 322.969 260.44 323.363 260.901 324.414C261.163 325.003 261.291 326.905 261.291 327.627C261.291 332.086 259.589 344.422 256.437 352.227L252.44 351.438Z" fill="#7D3200" />
              <path d="M316.979 353.929C316.979 357.671 315.995 361.935 314.944 364.359L311.731 364.164C311.925 361.801 311.864 358.721 311.864 357.209V348.681C306.221 351.833 296.576 355.047 287.986 355.113C287.197 355.113 286.608 354.852 286.608 353.801V342.188C286.608 340.158 286.608 338.78 286.346 335.961C286.213 334.516 285.69 333.337 283.589 332.353C283.133 332.153 283.656 329.662 284.184 329.729C285.429 329.857 287.725 330.185 288.904 330.185C295.464 329.99 301.496 329.073 304.12 328.612L306.088 330.775C306.483 331.302 304.909 332.22 304.386 332.353C301.891 332.876 296.97 333.665 291.133 333.665C290.61 333.665 290.41 333.86 290.738 334.188C291.2 334.582 291.789 335.238 291.789 336.089V349.799C291.789 350.521 292.05 350.649 292.578 350.649C296.776 350.649 306.354 348.159 311.864 345.078V329.268C311.864 327.761 311.864 326.449 311.597 325.265C311.269 323.692 310.224 322.513 309.04 321.724C308.384 321.268 309.829 318.377 310.747 318.772C313.765 320.084 315.861 322.052 316.456 323.825C316.779 324.809 316.979 325.793 316.979 328.745V341.142C319.731 341.076 322.749 340.876 325.112 340.486V322.708C325.112 321.201 325.112 319.889 324.851 318.705C324.523 317.132 323.472 315.953 322.293 315.164C321.637 314.708 323.211 311.822 324.128 312.212C327.147 313.524 329.243 315.492 329.832 317.265C330.16 318.249 330.36 319.233 330.36 322.185V363.18C330.36 366.921 329.243 371.18 328.192 373.609L324.979 373.415C325.179 371.052 325.112 367.967 325.112 366.46V344.484C322.683 344.812 319.208 345.012 316.979 345.14V353.929Z" fill="#7D3200" />
              <path d="M390.242 348.292C392.604 348.03 395.295 347.831 396.868 347.702C398.114 347.636 401.132 348.42 403.034 349.209L402.378 352.289C400.082 352.028 397.263 351.572 396.474 351.633L390.242 352.161V363.18C390.242 366.921 388.996 371.18 387.946 373.609L384.732 373.415C384.932 371.052 384.866 367.967 384.866 366.46V352.095C376.271 355.18 359.676 357.804 355.674 358.132C354.233 358.26 353.511 358.26 351.41 358.193C350.692 358.193 347.279 357.604 345.772 357.015C345.377 356.881 345.9 353.601 346.495 353.668L351.348 354.196C353.772 354.391 358.169 353.996 363.089 353.273V351.505C363.089 349.665 362.3 348.815 361.25 347.636C360.594 346.847 362.89 344.75 363.745 345.207C364.791 345.734 367.287 347.964 368.009 349.209C368.204 349.537 368.204 350.916 368.071 352.489C374.892 351.305 381.714 349.799 384.866 348.881V322.708C384.866 321.201 384.866 319.889 384.604 318.705C384.276 317.132 383.354 315.953 382.175 315.164C381.519 314.708 383.092 311.822 384.01 312.212C387.028 313.524 389.13 315.492 389.719 317.265C390.047 318.249 390.242 319.233 390.242 322.185V348.292ZM363.284 326.905C359.809 326.905 357.642 329.201 357.642 333.337C357.642 338.252 360.727 340.353 364.463 340.353C367.943 340.353 371.023 338.252 371.023 333.399C371.023 330.646 370.895 329.99 369.583 328.284C368.993 327.561 370.172 325.332 370.956 325.66C374.436 327.105 376.204 329.729 376.204 333.27C376.204 338.713 372.402 344.223 364.53 344.223C356.658 344.223 352.46 339.174 352.46 333.337C352.46 329.201 355.151 323.892 361.972 323.364C362.105 321.985 362.039 320.545 360.004 319.166C359.676 318.972 360.594 317.526 361.055 317.66C363.284 318.316 366.236 320.478 366.236 323.364V324.281C366.236 326.905 364.791 326.905 363.284 326.905Z" fill="#7D3200" />
              <path d="M250.09 275.028C249.301 275.028 248.511 274.982 247.727 274.9C236.257 273.67 223.348 263.466 208.265 243.709C197.313 229.359 186.053 210.817 178.145 194.115C170.903 178.806 167.203 165.179 167.147 153.607C167.055 136.095 175.337 127.28 182.301 122.964C192.223 116.82 204.195 117.235 216.003 124.143C226.33 130.18 236.391 140.835 245.918 155.816C266.208 187.76 278.318 187.083 287.159 186.591C294.016 186.197 309.048 178.976 309.048 159.952C309.048 152.29 306.741 145.991 302.39 141.732C300.371 139.795 298.055 138.324 295.446 137.314C292.832 136.305 290.126 135.838 287.328 135.915C276.571 136.166 267.182 145.535 267.089 145.632C266.69 146.042 266.254 146.406 265.788 146.734C265.316 147.057 264.819 147.334 264.291 147.559C263.768 147.785 263.225 147.959 262.667 148.077C262.108 148.195 261.544 148.261 260.975 148.267C260.401 148.277 259.838 148.231 259.274 148.128C258.71 148.021 258.167 147.867 257.634 147.657C257.106 147.441 256.599 147.185 256.122 146.873C255.64 146.56 255.194 146.206 254.784 145.812C254.374 145.412 254.01 144.976 253.682 144.51C253.36 144.038 253.083 143.541 252.857 143.013C252.632 142.491 252.458 141.947 252.34 141.389C252.222 140.83 252.155 140.266 252.15 139.698C252.14 139.124 252.186 138.56 252.288 137.996C252.396 137.432 252.55 136.889 252.76 136.356C252.975 135.828 253.231 135.321 253.544 134.844C253.857 134.362 254.21 133.917 254.605 133.507C255.179 132.912 268.95 118.946 286.918 118.516C289.46 118.449 291.981 118.639 294.488 119.075C296.994 119.51 299.433 120.192 301.801 121.114C304.174 122.037 306.429 123.18 308.571 124.553C310.713 125.922 312.702 127.49 314.531 129.253C319.964 134.557 326.437 144.177 326.437 159.921C326.437 175.813 319.41 186.13 313.512 191.983C306.47 198.973 296.983 203.442 288.112 203.934C273.05 204.77 254.989 202.535 231.22 165.112C216.823 142.445 201.213 131.703 191.465 137.74C181.43 143.956 182.332 162.242 193.879 186.658C201.182 202.1 211.985 219.914 222.097 233.142C235.279 250.413 244.929 257.096 249.582 257.593C253.078 257.962 260.283 253.76 270.026 240.824C274.941 234.197 279.333 227.243 283.207 219.96C283.469 219.453 283.776 218.976 284.13 218.53C284.489 218.084 284.883 217.674 285.319 217.305C285.755 216.936 286.221 216.614 286.718 216.337C287.22 216.06 287.743 215.835 288.286 215.66C288.83 215.486 289.383 215.368 289.952 215.302C290.516 215.24 291.085 215.23 291.653 215.276C292.222 215.322 292.781 215.425 293.334 215.583C293.883 215.737 294.411 215.947 294.918 216.209C295.425 216.47 295.902 216.778 296.348 217.131C296.799 217.49 297.204 217.885 297.573 218.32C297.942 218.756 298.265 219.222 298.547 219.719C298.823 220.216 299.049 220.739 299.223 221.282C299.397 221.826 299.515 222.384 299.582 222.948C299.648 223.517 299.659 224.086 299.613 224.655C299.566 225.224 299.464 225.782 299.305 226.331C299.151 226.879 298.941 227.407 298.68 227.919C294.395 236.012 289.527 243.735 284.068 251.089C271.999 267.177 260.857 275.028 250.09 275.028Z" fill="#FA625B" />
            </svg>
          </MobileSideBarMenuContainer_logo>
        </Link>


        <MobileSideBarMenuContainer_copyright>
          <span>
            © 2022 - Page by Superduper-India
          </span>
        </MobileSideBarMenuContainer_copyright>
      </MobileSideBarMenuContainer>
    </>
  )
}