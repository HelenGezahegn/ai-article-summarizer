<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://ai-summarizer-summize.netlify.app/">
    <img src="src/assets/logo.svg" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Summize (Sumzs)</h3>

  <p align="center">
    An AI article summarizer.
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ai-summarizer-summize.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/HelenGezahegn/ai-article-summarizer/issues">Report Bug</a>
    ·
    <a href="https://github.com/HelenGezahegn/ai-article-summarizer/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
  <img src="https://i.ibb.co/HDrx5Sh/Screenshot-2023-10-08-at-2-14-14-AM.png" alt="product screenshot"/>
</div>
Simplify your readings with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.

The goals of this project were to:
* setup a ReactJS project using Vite
* create a responsive, beautiful UI/UX with a nice touch of glass morphism using Tailwind CSS
* make advanced RTK query API requests that fire on condition
* save history using the local storage
* handle form events and catch errors
* implement copy to clipboard

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Redux][Redux.js]][Redux-url]
* [![Tailwind][Tailwind]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key from [Rapid API](https://rapidapi.com/restyler/api/article-extractor-and-summarizer?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/ai-article-summarizer.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```js
   const VITE_RAPID_API_ARTICLE_KEY = 'ENTER YOUR API';
   ```
5. Run the app
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Helen Gezahegn - gezahegn@ualberta.ca

Project Link: [https://github.com/HelenGezahegn/ai-article-summarizer](https://github.com/HelenGezahegn/ai-article-summarizer/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/HelenGezahegn/ai-article-summarizer.svg?style=for-the-badge
[contributors-url]: https://github.com/HelenGezahegn/ai-article-summarizer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HelenGezahegn/ai-article-summarizer.svg?style=for-the-badge
[forks-url]: https://github.com/HelenGezahegn/ai-article-summarizer/network/members
[stars-shield]: https://img.shields.io/github/stars/HelenGezahegn/ai-article-summarizer.svg?style=for-the-badge
[stars-url]: https://github.com/HelenGezahegn/ai-article-summarizer/stargazers
[issues-shield]: https://img.shields.io/github/issues/HelenGezahegn/ai-article-summarizer.svg?style=for-the-badge
[issues-url]: https://github.com/HelenGezahegn/ai-article-summarizer/issues
[license-shield]: https://img.shields.io/github/license/HelenGezahegn/ai-article-summarizer.svg?style=for-the-badge
[license-url]: https://github.com/HelenGezahegn/ai-article-summarizer/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: [https://linkedin.com/in/HelenGezahegn](https://www.linkedin.com/in/HelenGezahegn/)
[product-screenshot]: https://i.ibb.co/HDrx5Sh/Screenshot-2023-10-08-at-2-14-14-AM.png
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Netlify]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=whit
[Netlify-url]: https://www.netlify.com/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
