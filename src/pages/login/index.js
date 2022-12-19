import { useState } from "react";
import { useDispatch } from "react-redux";
import BreadCrumb from "../../components/breadcrumb";
import useApi from "../../components/hooks/useApi";
import { setToken } from "../../redux/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi();
  const dispatch = useDispatch();

  const breadCrumb = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/auth/login",
    },
  ];
  const onFormSubmit = (event) => {
    event.preventDefault();

    const postData = { email, password };
    api
      .post("shop/authentication-token", postData)
      .then((response) => {
        console.log(">>LOGIN RESPONSE", response);

        const customerId = response.data.customer.replace(
          "/api/v2/shop/customers/",
          ""
        );

        dispatch(
          setToken({
            token: response.data.token,
            customerId,
          })
        );

        document.location.replace("/");
      })
      .catch((err) => {
        console.log(">>LOGIN ERR", err);
        alert("An error occured");
      });
  };
  return (
    <>
      <BreadCrumb items={breadCrumb} />

      <div className="content">
        <div className="container">
          <div class="box">
            <div class="row">
              <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
                <div class="box-body">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
                      <h3 class="mb10">Login</h3>
                    </div>

                    <form onSubmit={onFormSubmit}>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <label
                            class="control-label sr-only"
                            htmlFor="email"
                          ></label>
                          <div class="login-input">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Enter your email id"
                              required=""
                              onChange={(event) => setEmail(event.target.value)}
                            />
                            <div class="login-icon">
                              <i class="fa fa-user"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <label class="control-label sr-only"></label>
                          <div class="login-input">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="******"
                              required=""
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                            />
                            <div class="login-icon">
                              <i class="fa fa-lock"></i>
                            </div>
                            <div class="eye-icon">
                              <i class="fa fa-eye"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20 ">
                        <button
                          class="btn btn-primary btn-block mb10"
                          type="submit"
                        >
                          Login
                        </button>
                        <div>
                          <p>
                            Don't you have an account?{" "}
                            <a style={{ color: "blue" }} href="/auth/register">
                              Register
                            </a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                <div className="box-body">
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="/images/feature_icon_1.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Loyalty Points</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="/images/feature_icon_2.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Instant Checkout</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="/images/feature_icon_3.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Exculsive Offers</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
