Start your development with a premium dashboard for NextJS, Bootstrap 4, Reactstrap and React. Argon perfectly combines using NextJS reusable HTML and React and modular CSS with a modern styling and beautiful markup throughout each page template in the pack.


#### Fully Coded Components

NextJS Argon Dashboard PRO is built with over 200 individual components, giving you the freedom of choosing and combining. All components can take variations in colour, that you can easily modify using SASS files.

You will save a lot of time going from prototyping to full-functional code, because all elements are implemented. This Dashboard is coming with prebuilt examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.

Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.

#### Complex Documentation

Each element is well presented in a very complex documentation. You can read more about the idea behind this dashboard here. You can check the components here and the foundation here.

#### Example Pages

If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages. You will be able to quickly set up the basic structure for your web project.

#### Quick Start

*   Install NodeJS **LTS** version from [NodeJs Official Page](https://nodejs.org/en/)
*   Go to [creative tim website](https://www.creative-tim.com/?ref=adspr-github-readme) and login into your account
*   Go to [downloads](https://www.creative-tim.com/downloads?ref=adspr-github-readme) section on creative tim website (be sure to be logged into your account)
*   Press the download button near **NextJS Argon Dashboard PRO** product (this will download onto your computer a zip file)
*   Unzip the downloaded file to a folder in your computer
*   Open Terminal
*   Go to your file project (where you’ve unzipped the product)
*   Run in terminal `npm install`
*   Then run `npm run dev`
*   Or you can simply run `npm run install:clean` (if you use a linux based terminal) which will install `node_modules` and also will start your project.
*   If you have an error something containing **Module not found** please make sure your `next.config.js`, `pages/_app.js` and `pages/_document.js` files is configured as that from our product
*   (Optional) You can create a new nextjs application
    *   Check their official docs here: https://nextjs.org/learn/basics/create-nextjs-app
    *   Copy what you need from **NextJS Argon Dashboard PRO** to your own project)
    *   Also, if you have issues with integrating your project with our product, please check that you have our config (`nextjs.config.js`, `pages/_app.js` and `pages/_document.js`) integrated with yours as well
    *   [Here](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/50#issuecomment-407030675) is a useful thread on integrating our product with other projects
*   Navigate to [https://localhost:3000](https://localhost:3000)

#### Special thanks
During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source.

Let us know your thoughts below. And good luck with development!


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [FREE Versions](#pro-versions)
* [Kit Versions](#kit-versions)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## File Structure
Within the download you'll find the following directories and files:

```
NextJS Argon Dashboard PRO
.
├── CHANGELOG.md
├── README.md
├── ISSUE_TEMPLATE.md
├── next.config.js
├── package.json
├── routes.js
├── Documentation
│   └── documentation.html
├── assets
│   ├── css
│   │   ├── nextjs-argon-dashboard-pro.css
│   │   ├── nextjs-argon-dashboard-pro.css.map
│   │   └── nextjs-argon-dashboard-pro.min.css
│   ├── fonts
│   │   └── nucleo
│   ├── img
│   │   ├── brand
│   │   │   └── favicon.ico
│   │   ├── icons
│   │   │   ├── cards
│   │   │   ├── common
│   │   │   └── flags
│   │   └── theme
│   ├── scss
│   │   ├── bootstrap
│   │   │   ├── mixins
│   │   │   ├── utilities
│   │   │   └── vendor
│   │   ├── core
│   │   │   ├── alerts
│   │   │   ├── avatars
│   │   │   ├── badges
│   │   │   ├── breadcrumbs
│   │   │   ├── buttons
│   │   │   ├── cards
│   │   │   ├── charts
│   │   │   ├── close
│   │   │   ├── collapse
│   │   │   ├── content
│   │   │   ├── custom-forms
│   │   │   ├── dropdowns
│   │   │   ├── footers
│   │   │   ├── forms
│   │   │   ├── grid
│   │   │   ├── headers
│   │   │   ├── icons
│   │   │   ├── list-groups
│   │   │   ├── maps
│   │   │   ├── masks
│   │   │   ├── medias
│   │   │   ├── mixins
│   │   │   ├── modals
│   │   │   ├── navbars
│   │   │   ├── navs
│   │   │   ├── paginations
│   │   │   ├── popovers
│   │   │   ├── progresses
│   │   │   ├── reboot
│   │   │   ├── rtl
│   │   │   ├── sections
│   │   │   ├── separators
│   │   │   ├── shortcuts
│   │   │   ├── tables
│   │   │   ├── timeline
│   │   │   ├── type
│   │   │   ├── utilities
│   │   │   └── vendors
│   │   ├── custom
│   │   └── react
│   │       ├── bootstrap
│   │       └── plugins
│   └── vendor
│       ├── @fortawesome
│       ├── animate.css
│       ├── bootstrap-rtl
│       ├── fullcalendar
│       ├── nucleo
│       ├── quill
│       ├── select2
│       └── sweetalert2
├── components
│   ├── Footers
│   │   ├── AdminFooter.js
│   │   └── AuthFooter.js
│   ├── Headers
│   │   ├── AlternativeHeader.js
│   │   ├── AuthHeader.js
│   │   ├── CardsHeader.js
│   │   ├── IndexHeader.js
│   │   ├── ProfileHeader.js
│   │   ├── RTLProfileHeader.js
│   │   └── SimpleHeader.js
│   ├── Navbars
│   │   ├── AdminNavbar.js
│   │   ├── AuthNavbar.js
│   │   └── IndexNavbar.js
│   ├── PageChange
│   │   └── PageChange.js
│   └── Sidebar
│       └── Sidebar.js
├── layouts
│   ├── Admin.js
│   ├── Auth.js
│   └── RTL.js
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── admin
│   │   ├── alternative.js
│   │   ├── buttons.js
│   │   ├── calendar.js
│   │   ├── cards.js
│   │   ├── charts.js
│   │   ├── components.js
│   │   ├── dashboard.js
│   │   ├── elements.js
│   │   ├── google.js
│   │   ├── grid.js
│   │   ├── icons.js
│   │   ├── notifications.js
│   │   ├── profile.js
│   │   ├── react-bs-tables.js
│   │   ├── sortable.js
│   │   ├── tables.js
│   │   ├── timeline.js
│   │   ├── typography.js
│   │   ├── validation.js
│   │   ├── vector.js
│   │   └── widgets.js
│   ├── auth
│   │   ├── lock.js
│   │   ├── login.js
│   │   ├── pricing.js
│   │   └── register.js
│   ├── index.js
│   └── rtl
│       └── rtl-support.js
└── variables
    ├── charts.js
    └── general.js
```
