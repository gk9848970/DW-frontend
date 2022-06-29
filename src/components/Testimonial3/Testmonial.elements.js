import styled from "styled-components";
import { ColorData } from "../../App2";

export const Section = styled.section`
  margin: 4vw;
  margin-top: 150px;
  background: ${() => ColorData.primary};
  padding: 0.1rem;
  border-radius: 1.5rem;
  position: relative;
  @media screen and (max-width: 996px){
    margin-top: 150px;
  }
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: ${() => ColorData.secondary};
    border-radius: 1rem;
    .title {
      margin-top: -120px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h1 	{
      font-size: 2.8rem;
    	}
    }
    .testimonials {
      display: grid;
      justify-content: space-around;
      align-items: center;
      gap: 6vw;
      margin-top: 6vw;
      .testimonial {
        margin-top: 1.5rem;
        padding: 0 4vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        gap: 1rem;
        @media screen and (max-width: 800px) {
          flex-direction: column;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.5rem;
          span {
            color: #fc4958;
          }
        }
        .image {
          overflow: hidden;
          width: 5rem;
          max-height: 5rem;
          border-radius: 10rem;
          img {
            height: 5rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 996px) {
    .container {
      .title {
        margin-top: -120px;
        font-size: 1.3rem;
        position: center;
        text-align: center;
        background-color: transparent;
      }
      .testimonials {
        margin-top: 20vw;
        flex-direction: column;
      }
      p {
          font-size: 0.9rem;
      }
    }
  }
`;