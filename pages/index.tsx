import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Image from "next/image";
import useMousePosition from "hooks/useMousePosition";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ProductName from "components/home_page/ProductName";
import Testimonial from "components/home_page/Testimonial";
import Footer from "components/common/footer";
import { useRouter } from "next/router";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import testimonialsData from "data/testimonialsData";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoverActive, setHoverActive] = useState(false);
  const { x, y } = useMousePosition();
  const router = useRouter();
  const cdnLink = "https://d3c43ayenzvpit.cloudfront.net";

  useEffect(() => {
    if (router.asPath === "/#") {
      setCurrentPage(1);
    }
    if (router.asPath === "/#FoundersNote") {
      setCurrentPage(5);
    }
    if (router.asPath === "/#ContactUs") {
      setCurrentPage(6);
    }
    router.push("", "/", { shallow: true });
  }, [router.asPath]);
  const paginationHandler = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <ReactScrollWheelHandler
      upHandler={(e) => {
        setCurrentPage(currentPage - 1 < 0 ? 0 : currentPage - 1);
      }}
      downHandler={(e) => {
        setCurrentPage(currentPage + 1 > 7 ? 7 : currentPage + 1);
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={`${styles.STD} `}>
            <Image
              className={`${styles.bounce}`}
              src={require("public/Icons/Arrow.svg")}
              alt="arrow down icon"
            />
            {currentPage === 7 ? (
              <h4
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentPage(1)}
              >
                Scroll to Top
              </h4>
            ) : (
              <h4>Scroll to discover</h4>
            )}
          </div>

          <div className={styles.pagination}>
            <div
              className={`${styles.page_dot} ${
                currentPage == 0 && styles.active
              }`}
              onClick={() => paginationHandler(0)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 1 && styles.active
              }`}
              onClick={() => paginationHandler(1)}
            ></div>

            <div
              className={`${styles.page_dot} ${
                currentPage == 2 && styles.active
              }`}
              onClick={() => paginationHandler(2)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 3 && styles.active
              }`}
              onClick={() => paginationHandler(3)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 4 && styles.active
              }`}
              onClick={() => paginationHandler(4)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 5 && styles.active
              }`}
              onClick={() => paginationHandler(5)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 6 && styles.active
              }`}
              onClick={() => paginationHandler(6)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 7 && styles.active
              }`}
              onClick={() => paginationHandler(7)}
            ></div>
          </div>
          <img
            className={styles.parallax_img}
            loading="lazy"
            src={`${cdnLink}/Assets/Props/Bowl.svg`}
            alt="bowl of grains"
            style={{
              translate: `${50 * currentPage}% ${y}px`,
              transform: `translateX(${x}px) translateY(${y}px)`,
              rotate: `${60 * currentPage}deg`,
            }}
          />
          <Footer />
        </div>

        <div
          className={`${styles.page} ${styles.intro}`}
          style={{
            transform: `translateY(${100 * -currentPage}%)`,
          }}
        >
          <h2>
            Your health is our business. So the choice is yours to make you
            healthy.
          </h2>
        </div>
        {/* Red Rice Powder */}
        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 1)}%)`,
          }}
        >
          <ProductName
            page={1}
            pageName={`Rice Powder \nVarieties`}
            currentPage={currentPage}
          />
        </div>
        <div
          className={`${styles.page} ${styles.productImg} `}
          style={{
            transform: `translateY(${100 * -(currentPage - 1)}%)`,
          }}
        >
          <img
            className={styles.parallax_img}
            loading="lazy"
            src={`${cdnLink}/Assets/Products/RedRicePowder.svg`}
            alt="red rice powder"
            style={{
              translate: `${-x}px ${-y}px`,
            }}
          />
        </div>
        <div className={styles.redRiceProps}>
          <div
            className={`${styles.prop} ${styles.propImg1} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 1)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/redRice.svg`}
              alt="red rice"
              style={{
                translate: `${x + 2}px ${y - 3}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg2} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 1)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/spoonRight.svg`}
              alt="spoon with flour right"
              style={{
                translate: `${-x}px ${y + 2}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg3} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 1)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/spoonWhiteFlour.svg`}
              alt="spoon with white flour"
              style={{
                translate: `${x + 1}px ${-y}px`,
              }}
            />
          </div>
        </div>
        {/* Nut Powder */}
        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 2)}%)`,
          }}
        >
          <ProductName
            page={2}
            pageName={`Nut Powder \nVarieties`}
            currentPage={currentPage}
          />
        </div>
        <div
          className={`${styles.page} ${styles.productImg} `}
          style={{
            transform: `translateY(${100 * -(currentPage - 2)}%)`,
          }}
        >
          <img
            className={styles.parallax_img}
            loading="lazy"
            src={`${cdnLink}/Assets/Products/nutSeedsPowder.svg`}
            alt="nuts and seeds powder"
            style={{
              translate: `${-x}px ${-y}px`,
            }}
          />
        </div>
        <div className={`${styles.nutPowderProps}`}>
          <div
            className={`${styles.prop} ${styles.propImg1} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 2)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/Bowl.svg`}
              alt="Bowl"
              style={{
                translate: `${x - 1}px ${y + 3}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg2} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 2)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/almond.svg`}
              alt="almond"
              style={{
                translate: `${x + 5}px ${y + 1}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg3} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 2)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/nut.svg`}
              alt="hazlenut"
              style={{
                translate: `${x - 1}px ${y - 6}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg4} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 2)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/cashew.svg`}
              alt="cashew"
              style={{
                translate: `${x + 4}px ${-y}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg5} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 2)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/elachi.svg`}
              alt="elachi"
              style={{
                translate: `${x - 2}px ${y - 6}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg6} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 2)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/pista.svg`}
              alt="pista"
              style={{
                translate: `${x - 5}px ${y + 1}px`,
              }}
            />
          </div>
        </div>
        {/* Travel Food */}
        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 3)}%)`,
          }}
        >
          <ProductName
            page={3}
            pageName={`Travel Food \nVarieties`}
            currentPage={currentPage}
          />
        </div>
        <div
          className={`${styles.page} ${styles.productImg} `}
          style={{
            transform: `translateY(${100 * -(currentPage - 3)}%)`,
          }}
        >
          <img
            className={styles.parallax_img}
            loading="lazy"
            src={`${cdnLink}/Assets/Products/oatsCerealMix.svg`}
            alt="oats cereal mix"
            style={{
              translate: `${-x}px ${-y}px`,
            }}
          />
        </div>
        <div className={`${styles.oatsCerealProps}`}>
          <div
            className={`${styles.prop} ${styles.propImg1} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 3)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/oatBowl.svg`}
              alt="oat Bowl"
              style={{
                translate: `${x + 3}px ${y - 3}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg2} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 3)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/almond2.svg`}
              alt="almond2"
              style={{
                translate: `${x - 1}px ${y + 3}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg3} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 3)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/pista2.svg`}
              alt="pista2"
              style={{
                translate: `${x + 3}px ${y - 4}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg4} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 3)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/haslenut.svg`}
              alt="hasle Nut"
              style={{
                translate: `${x - 6}px ${y + 2}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg5} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 3)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/elachi.svg`}
              alt="elachi"
              style={{
                translate: `${x + 1}px ${-y}px`,
              }}
            />
          </div>
        </div>
        {/* Instant Drink  */}
        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 4)}%)`,
          }}
        >
          <ProductName
            page={4}
            pageName={`Instant Drink \nMix`}
            currentPage={currentPage}
          />
        </div>
        <div
          className={`${styles.page} ${styles.productImg} `}
          style={{
            transform: `translateY(${100 * -(currentPage - 4)}%)`,
          }}
        >
          <img
            className={styles.parallax_img}
            loading="lazy"
            src={`${cdnLink}/Assets/Products/InstantDrink1.svg`}
            alt="instant  drink 1"
            style={{
              translate: `${x + 2}px ${y - 1}px`,
            }}
          />
        </div>
        <div
          className={`${styles.page} ${styles.productImg} `}
          style={{
            transform: `translateY(${100 * -(currentPage - 4)}%)`,
          }}
        >
          <img
            className={styles.parallax_img}
            loading="lazy"
            src={`${cdnLink}/Assets/Products/InstantDrink2.svg`}
            alt="instant  drink 2"
            style={{
              translate: `${-x}px ${y + 2}px`,
            }}
          />
        </div>
        <div className={`${styles.instantDrinkProps}`}>
          <div
            className={`${styles.prop} ${styles.propImg1} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 4)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/carrot.svg`}
              alt="carrot"
              style={{
                translate: `${-x}px ${y + 2}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg2} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 4)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/chocoPowder.svg`}
              alt="choco powder"
              style={{
                translate: `${-x}px ${-y}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg3} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 4)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/chocolateDrop.svg`}
              alt="chocolate drop"
              style={{
                translate: `${x + 2}px ${y - 1}px`,
              }}
            />
          </div>
        </div>

        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 5)}%)`,
          }}
        >
          <ProductName page="5" pageName={`Founder's \nNote`} />
        </div>
        <div
          className={`${styles.page} ${styles.foundersPage}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 5)}%)`,
          }}
        >
          <div className={styles.founders_note}>
            <p>From K Swathi ,</p>
            <p>
              When I started making baby food products, we were able to see the
              difference in quality from most products in the market. We felt
              safe using it on our infant. I then started a small scale women
              based unit, where I employ local expert mothers to make Rithus
              food products by natural and ayurvedic formulations of
              ingredients, which is 100% safe and best in quality. Our products
              can now be used from 6+ months babies to adults.
            </p>
          </div>
        </div>
        <div className={`${styles.foundersNoteProps}`}>
          <div
            className={`${styles.prop} ${styles.propImg1} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 5)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/chocolate1.svg`}
              alt="chocolate1"
              style={{
                translate: `${x - 1}px ${y + 3}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg2} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 5)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/chocolate2.svg`}
              alt="chocolate2"
              style={{
                translate: `${x + 3}px ${y + 1}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg3} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 5)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/chocolateDrop.svg`}
              alt="chocolate drop"
              style={{
                translate: `${-x}px ${y + 2}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg4} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 5)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/chocolateDrop4.svg`}
              alt="chocolate drop"
              style={{
                translate: `${-x}px ${-y}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${styles.propImg5} `}
            style={{
              transform: `translateY(${100 * -(currentPage - 5)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/chocolate2.svg`}
              alt="chocolate drop 2"
              style={{
                translate: `${x}px ${-y}px`,
              }}
            />
          </div>
        </div>
        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 6)}%)`,
          }}
        >
          <ProductName page="6" pageName={`Contact \nUs`} />
        </div>
        <div
          className={`${styles.page} ${styles.contactUsPage}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 6)}%)`,
          }}
        >
          <div
            className={styles.contact_us}
            onMouseOver={() => setHoverActive(true)}
            onMouseLeave={() => setHoverActive(false)}
          >
            <a href="mailto:rithusfoods@gmail.com">Rithusfoods@Gmail.Com</a>
            {/* <p>Rithusfoods@Gmail.Com</p> */}
            <p>+91 8110933444</p>
            <div className={styles.test}>
              <div className={styles.socialMedia}>
                <Link
                  href={
                    "https://instagram.com/rithus_baby_foods?igshid=YmMyMTA2M2Y="
                  }
                  target="_blank"
                >
                  <Image
                    src={require("public/Icons/instagram.svg")}
                    alt="instagram icon"
                  />
                </Link>
                <Link href={"https://wa.me/8110933444"} target="_blank">
                  <Image
                    src={require("public/Icons/whatsapp.svg")}
                    alt="whatsapp icon"
                  />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100071178183258"
                  }
                  target="_blank"
                >
                  <Image
                    src={require("public/Icons/facebook.svg")}
                    alt="facebook icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.contactUsProps}`}>
          <div
            className={`${styles.prop} ${hoverActive && styles.active} ${
              styles.propImg1
            } `}
            style={{
              transform: `translateY(${100 * -(currentPage - 6)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/almond.svg`}
              alt="almond"
              style={{
                translate: `${x - 1}px ${-y}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${hoverActive && styles.active} ${
              styles.propImg2
            }`}
            style={{
              transform: `translateY(${100 * -(currentPage - 6)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/haslenut.svg`}
              alt="haslenut"
              style={{
                translate: `${x + 1}px ${y - 3}px`,
              }}
            />
          </div>
          <div
            className={`${styles.prop} ${hoverActive && styles.active} ${
              styles.propImg3
            } `}
            style={{
              transform: `translateY(${100 * -(currentPage - 6)}%)`,
            }}
          >
            <img
              className={styles.parallax_img}
              loading="lazy"
              src={`${cdnLink}/Assets/Props/pista.svg`}
              alt="pista"
              style={{
                translate: `${x}px ${-y}px`,
              }}
            />
          </div>
        </div>
        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 7)}%)`,
          }}
        >
          <ProductName page="7" pageName="Testimonials" />
        </div>
        <div
          className={`${styles.page} ${styles.testimonialsPage}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 7)}%)`,
          }}
        >
          <div className={styles.testimonialsContainer}>
            {testimonialsData.map((testimonial, index) => {
              return <Testimonial data={testimonial} key={index} />;
            })}
          </div>
        </div>
      </div>
    </ReactScrollWheelHandler>
  );
}
