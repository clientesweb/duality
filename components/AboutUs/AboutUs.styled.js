import styled from "styled-components";
import { motion } from "framer-motion";
import { flexColumn, divCenter, HeadingH3, HeadingH2, flexRowCenter, flexColumnCenter, PrimaryButton, MainHeading } from "../cssHelper";

export const Section = styled.section`
  width: 100vw;
  max-width: 100%;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.colors.red.light};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: fit-content;
  };
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  };
  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    flex-direction: column;
  };
`;

export const AboutTitle = styled.h2`
  ${MainHeading}
  color: ${({ theme }) => theme.colors.red.dark};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 30px;
  width: ${({ theme }) => theme.width[10]};
  font-family: "Plus Jakarta Sans", sans-serif;
  text-align: left;
  color: ${({ theme }) => theme.colors.red.dark};
  margin-bottom: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: 16px;
    margin-bottom: 0px;
  }
`;

export const AboutButton = styled.button`
  ${PrimaryButton}
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.red.DEFAULT};
  color: white;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: 16px;
  }
`;

export const AboutImage = styled.img`
  width: ${({ theme }) => theme.width[10]};
  height: 600px;
  object-fit: cover;
  object-position: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    max-height: 500px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    max-height: 400px;
  }
`;