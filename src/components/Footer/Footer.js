import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer px-4">
      <div class="px-5 mt-4">
        <p>
          Text is available under the
          <a href="#">Creative Commons Attribution-ShareAlike License 3.0</a>;
          additional terms may apply. By using this site, you agree to the
          <a href="#"> Terms of Use </a> and<a href="#">Privacy Policy </a>.
          Wikipedia® is a registered trademark of the
          <a href="#">Wikimedia Foundation, Inc</a>., a non-profit organization.
        </p>
      </div>
      <ul class="footer-text px-5 d-flex">
        <li class="mr-2">
          <a href="#"> Privacy policy </a>
        </li>
        <li class="mr-3">
          <a href="#"> Privacy policy </a>
        </li>
        <li class="mr-3">
          <a href="#"> about Wikipedia </a>
        </li>
        <li class="mr-3">
          <a href="#"> Disclaimers </a>
        </li>
        <li class="mr-3">
          <a href="#"> Contact Wkipedia </a>
        </li>
        <li class="mr-3">
          <a href="#"> Mobile View </a>
        </li>
        <li class="mr-3">
          <a href="#"> Devlopers </a>
        </li>
      </ul>
      <ul type="none" class="last-button">
        <li class="btn-image">
          <img class="wikimedia-img" src="image/wikimedia-button.png" />
        </li>

        <li class="btn-image1">
          <img
            class="wikimedia-img"
            src="image/poweredby_mediawiki_88x31.png"
          />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
