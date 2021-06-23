import React from "react";
import Link from "next/link";

import {
  Wrapper,
  FooterLogo,
  FooterNav,
  NavEntry,
  SocialMediaContainer,
  SocialMediaLink,
  OrgInfoArea
} from "./StyledFooter";
import RandomQuote from "./RandomQuote";
import Newsletter from "./Newsletter";

export default function Footer(props) {
  return (
    <Wrapper>
      <Newsletter />
      <FooterNav>
        <Link href={"/create"} passHref className="nav-link">
          <a>
            <NavEntry>CREATE</NavEntry>
          </a>
        </Link>
        <Link href={"/learn"} passHref className="nav-link">
          <a>
            <NavEntry>LEARN</NavEntry>
          </a>
        </Link>
        {/*}
        <Link href={"/play"} passHref className="nav-link">
          <NavEntry>PLAY</NavEntry>
        </Link>
        {*/}
        <Link href={"/support-us"} passHref className="nav-link">
          <a>
            <NavEntry>SUPPORT US</NavEntry>
          </a>
        </Link>
        <Link href={"/members"} passHref className="nav-link">
          <a>
            <NavEntry>JOIN</NavEntry>
          </a>
        </Link>
      </FooterNav>
      <SocialMediaContainer>
        <SocialMediaLink Type="Instagram">Instagram Link</SocialMediaLink>
        <SocialMediaLink Type="Linkedin">Linkedin Link</SocialMediaLink>
        <Link href={"/"} passHref className="nav-link">
          <a>
            <FooterLogo />
          </a>
        </Link>
        <SocialMediaLink Type="Twitch">Twitch Link</SocialMediaLink>
        <SocialMediaLink Type="Discord">Discord Link</SocialMediaLink>
      </SocialMediaContainer>
      <RandomQuote />
      <OrgInfoArea>
        -<a href="/page/terms-and-conditions">Terms of Service </a> {"- | -"}
        <a href="/page/privacy-policy">Privacy Policy </a> {"- | "} ©Dev
        Launchers, 2020.
      </OrgInfoArea>
    </Wrapper>
  );
}
