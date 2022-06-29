import styled from "styled-components";

export const Section = styled.section`
	.title {
	  margin-top: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 	{
      font-size: 2.8rem;
    	}
	}
  	.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;

      h3 {
        color: #262673;
      }

      p {
        text-align: center;
        font-size: 1.1rem;
      }

      .image {
        max-height: 15rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 15rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
	    	margin-top: .4rem;
        padding: .5rem 1rem;
        font-size: 1rem;
        color: white;
        border-radius: 4rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        background: #262673;
        text-transform: uppercase;
        &:hover {
          background: #262653;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;