<!-- PROJECT SHIELDS -->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Stylish media queries for styled-components</h3>

  <p align="center">
    A shorthand to incorporate your own breakpoints into a an easy shorthand when using styled components with media queries
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Intro](#intro)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)


<!-- Intro -->
## Intro

This project is a media query utility for [styled-components](https://www.styled-components.com/). It will allow you to use some incredibly useful shorthand's when using media queries. You can customise your own breakpoints (or use the default set)

An example of what using this library looks like:
```
  import { createMedia } from 'stylish-media' 

  const media = createMedia()

  const RedOnMediumDevices = styled.div`
      width: 100px;
      height: 100px;
      background-color: green;
      ${media.only.md`
        background-color: red;
      `}
    `
```

In this example a media object is created using all the default settings (px units and default breakpoints) and then a div is rendered which is only red on the 'md' breakpoint which by default is between 768 and 991 px.

### Prerequisites

For this project to be useful to you you should already be building with [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/)

### Installation
 
1. using npm
```sh
npm install --save stylish-media
```
2. using yarn
```sh
yarn add stylish-media
```



<!-- USAGE EXAMPLES -->
## Usage

TODO write some basic examples

## Roadmap

- Add support for using em and rem units

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-url]: https://github.com/akedemos/stylish-media/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/akedemos/stylish-media.svg?style=flat-square
[forks-url]: https://github.com/akedemos/stylish-media/network/members
[stars-shield]: https://img.shields.io/github/stars/akedemos/stylish-media.svg?style=flat-square
[stars-url]: https://github.com/akedemos/stylish-media/stargazers
[issues-shield]: https://img.shields.io/github/issues/akedemos/stylish-media.svg?style=flat-square
[issues-url]: https://github.com/akedemos/stylish-media/issues
[license-shield]: https://img.shields.io/github/license/akedemos/stylish-media.svg?style=flat-square
[license-url]: https://github.com/akedemos/stylish-media/blob/master/LICENSE.txt