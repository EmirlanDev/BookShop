import { useParams } from "react-router-dom";
import {
  ProductContextInterfase,
  useProductContext,
} from "../../../context/ProductContext";
import { useEffect, useState } from "react";
import {
  BasketContextInterface,
  useBasketContext,
} from "../../../context/BasketContext";

const Detail: React.FC = () => {
  const { oneProduct, getOneProduct }: ProductContextInterfase | any =
    useProductContext();

  const { addToCart }: BasketContextInterface | any = useBasketContext();

  const { id } = useParams();

  const [count, setCount] = useState<number | any>(1);

  let s = +`${Math.floor(Math.random()*9)}000`  

  useEffect(() => {
    setTimeout(() => {
      getOneProduct(id);
    }, s);
  });

  return (
    <section id="detail">
      <div className="container">
        {oneProduct ? (
          <div className="detail">
            <img src={oneProduct ? oneProduct.image : null} alt="oneProduct" />
            <div className="detail__text">
              <div className="detail__text__icon">
                <h1>{oneProduct ? oneProduct.title : null}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 22 19"
                  fill="none"
                >
                  <path
                    d="M3.45067 10.9082L10.4033 17.4395C10.6428 17.6644 10.7625 17.7769 10.9037 17.8046C10.9673 17.8171 11.0327 17.8171 11.0963 17.8046C11.2375 17.7769 11.3572 17.6644 11.5967 17.4395L18.5493 10.9082C20.5055 9.07059 20.743 6.0466 19.0978 3.92607L18.7885 3.52734C16.8203 0.99058 12.8696 1.41601 11.4867 4.31365C11.2913 4.72296 10.7087 4.72296 10.5133 4.31365C9.13037 1.41601 5.17972 0.990584 3.21154 3.52735L2.90219 3.92607C1.25695 6.0466 1.4945 9.07059 3.45067 10.9082Z"
                    stroke="#33363F"
                    strokeWidth="2"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.12 17.023L8.92096 14.733C8.37276 15.319 7.66095 15.7266 6.87803 15.9028C6.09512 16.0791 5.27731 16.0157 4.53088 15.721C3.78445 15.4263 3.14392 14.9139 2.69253 14.2504C2.24114 13.5869 1.99976 12.803 1.99976 12.0005C1.99976 11.198 2.24114 10.414 2.69253 9.75051C3.14392 9.08701 3.78445 8.57461 4.53088 8.27992C5.27731 7.98523 6.09512 7.92187 6.87803 8.09807C7.66095 8.27428 8.37276 8.6819 8.92096 9.26796L13.121 6.97796C12.8825 6.03403 12.9965 5.03555 13.4416 4.16966C13.8867 3.30378 14.6323 2.62994 15.5386 2.27446C16.445 1.91898 17.4499 1.90626 18.3649 2.23869C19.28 2.57112 20.0424 3.22588 20.5093 4.08022C20.9761 4.93457 21.1153 5.92985 20.9009 6.8795C20.6864 7.82916 20.1329 8.668 19.3442 9.23877C18.5555 9.80954 17.5857 10.0731 16.6166 9.97995C15.6475 9.88684 14.7456 9.44347 14.08 8.73296L9.87996 11.023C10.0412 11.6643 10.0412 12.3356 9.87996 12.977L14.079 15.267C14.7446 14.5564 15.6464 14.1131 16.6156 14.02C17.5847 13.9268 18.5545 14.1904 19.3432 14.7611C20.1319 15.3319 20.6854 16.1708 20.8999 17.1204C21.1143 18.0701 20.9751 19.0654 20.5083 19.9197C20.0414 20.774 19.279 21.4288 18.3639 21.7612C17.4489 22.0937 16.444 22.0809 15.5376 21.7255C14.6313 21.37 13.8857 20.6961 13.4406 19.8303C12.9955 18.9644 12.8815 17.9659 13.12 17.022V17.023ZM5.99996 14C6.5304 14 7.0391 13.7892 7.41418 13.4142C7.78925 13.0391 7.99996 12.5304 7.99996 12C7.99996 11.4695 7.78925 10.9608 7.41418 10.5857C7.0391 10.2107 6.5304 9.99996 5.99996 9.99996C5.46953 9.99996 4.96082 10.2107 4.58575 10.5857C4.21068 10.9608 3.99996 11.4695 3.99996 12C3.99996 12.5304 4.21068 13.0391 4.58575 13.4142C4.96082 13.7892 5.46953 14 5.99996 14ZM17 7.99996C17.5304 7.99996 18.0391 7.78925 18.4142 7.41417C18.7892 7.0391 19 6.53039 19 5.99996C19 5.46953 18.7892 4.96082 18.4142 4.58575C18.0391 4.21067 17.5304 3.99996 17 3.99996C16.4695 3.99996 15.9608 4.21067 15.5857 4.58575C15.2107 4.96082 15 5.46953 15 5.99996C15 6.53039 15.2107 7.0391 15.5857 7.41417C15.9608 7.78925 16.4695 7.99996 17 7.99996ZM17 20C17.5304 20 18.0391 19.7892 18.4142 19.4142C18.7892 19.0391 19 18.5304 19 18C19 17.4695 18.7892 16.9608 18.4142 16.5857C18.0391 16.2107 17.5304 16 17 16C16.4695 16 15.9608 16.2107 15.5857 16.5857C15.2107 16.9608 15 17.4695 15 18C15 18.5304 15.2107 19.0391 15.5857 19.4142C15.9608 19.7892 16.4695 20 17 20Z"
                    fill="#19272E"
                  />
                </svg>
              </div>
              <h3>by {oneProduct ? oneProduct.by : null}</h3>
              <h4>
                {oneProduct ? oneProduct.description.slice(0, 150) : null}
              </h4>
              <h5>${oneProduct ? oneProduct.price * count : null}</h5>
              <div className="detail__text__btns">
                <button
                  onClick={() => addToCart(count)}
                  className="detail__text__btns__addToCart"
                >
                  Add to Cart
                </button>
                <div className="detail__text__btns__count">
                  <button
                    onClick={() => (count > 1 ? setCount(count - 1) : count)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M0.5 7H13.5"
                        stroke="#818eea"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <p>{count}</p>
                  <button onClick={() => setCount(count + 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1222_36554)">
                        <path
                          d="M7 0.5V13.5"
                          stroke="#818eea"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0.5 6.95996H13.5"
                          stroke="#818eea"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1222_36554">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading">
            <svg viewBox="0 0 240 240" height="240" width="240" className="pl">
              <circle
                strokeLinecap="round"
                strokeDashoffset="-330"
                strokeDasharray="0 660"
                strokeWidth="20"
                stroke="#000"
                fill="none"
                r="105"
                cy="120"
                cx="120"
                className="pl__ring pl__ring--a"
              ></circle>
              <circle
                strokeLinecap="round"
                strokeDashoffset="-110"
                strokeDasharray="0 220"
                strokeWidth="20"
                stroke="#000"
                fill="none"
                r="35"
                cy="120"
                cx="120"
                className="pl__ring pl__ring--b"
              ></circle>
              <circle
                strokeLinecap="round"
                strokeDasharray="0 440"
                strokeWidth="20"
                stroke="#000"
                fill="none"
                r="70"
                cy="120"
                cx="85"
                className="pl__ring pl__ring--c"
              ></circle>
              <circle
                strokeLinecap="round"
                strokeDasharray="0 440"
                strokeWidth="20"
                stroke="#000"
                fill="none"
                r="70"
                cy="120"
                cx="155"
                className="pl__ring pl__ring--d"
              ></circle>
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};

export default Detail;
