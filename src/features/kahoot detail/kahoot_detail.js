import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Navbar from "../user/Navbar";

const KahootDetail = function () {
  const [listQueation, setListQuestion] = useState([
    {
      img: "https://img5.thuthuatphanmem.vn/uploads/2021/08/25/hinh-nen-3d-cho-may-tinh-4k_084701936.jpg",
      time: 15,
      ques_title: "What is this?",
      ans1: "Pigs",
      ans2: "Dogs",
      ans3: "Ducks",
      ans4: "Monkeys",
      ans1True: true,
      ans2True: false,
      ans3True: true,
      ans4True: false,
    },
  ]);
  const [showAnswer, setShowAnswer] = useState(false);
  const clickShowAnser = () => {
    setShowAnswer(!showAnswer);
  };

  const loadListQuestion = () => {
    setListQuestion([
      ...listQueation,
      {
        img: "https://img5.thuthuatphanmem.vn/uploads/2021/08/25/hinh-nen-3d-cho-may-tinh-4k_084701936.jpg",
        time: 20,
        ques_title: "What is this?",
        ans1: "a",
        ans2: "b",
        ans3: "c",
        ans4: "d",
        ans1True: true,
        ans2True: false,
        ans3True: false,
        ans4True: false,
      },
    ]);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-3">
            <img
              style={{ width: "100%" }}
              src="https://img5.thuthuatphanmem.vn/uploads/2021/08/25/hinh-nen-3d-cho-may-tinh-4k_084701936.jpg"
              alt
            />
            <h4>My room</h4>
            <div className="row">
              <div className="col-sm-5">
                <h5>0 player</h5>
              </div>
              <div className="col-sm-7">
                <button type="button" className="btn btn-warning mr-1">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
            <button
              style={{ width: "100%" }}
              type="button"
              className="btn btn-primary mt-3"
            >
              Start
            </button>
          </div>
          <div
            className="col-sm-9"
            style={{ backgroundColor: "#f4f7fa", height: "100vh" }}
          >
            <div>
              <div className="row d-flex justify-content-between">
                <h5>Question (3)</h5>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={clickShowAnser}
                >
                  Show answers
                </button>
              </div>
              <div className="col-sm-12">
                {listQueation.map((item) => {
                  return (
                    <div className="mb-3">
                      <div
                        style={{
                          backgroundColor: "#fff",
                          border: "none",
                          padding: 5,
                        }}
                      >
                        <div className="row">
                          <div className="col-sm-9">
                            <h5>1 - Quiz</h5>
                            <span style={{ fontWeight: "bold" }}>
                              {item.ques_title}
                            </span>
                          </div>
                          <div className="col-sm-3">
                            <img style={{ width: "100%" }} src={item.img} alt />
                            <span
                              style={{
                                position: "absolute",
                                marginTop: 60,
                                marginLeft: "-50px",
                                color: "white",
                              }}
                            >
                              {item.time} sec
                            </span>
                          </div>
                        </div>
                      </div>
                      {showAnswer && (
                        <div>
                          <div
                            style={{
                              border: "solid 1px #f5f5f5",
                              backgroundColor: "#fff",
                            }}
                          >
                            <div
                              className="row d-flex justify-content-between"
                              style={{ margin: 0 }}
                            >
                              <div>
                                <i
                                  className="ml-2 mr-1 fa fa-eercast"
                                  aria-hidden="true"
                                  style={{ color: "red" }}
                                />
                                <span>{item.ans1}</span>
                              </div>

                              {item.ans1True ? (
                                <i
                                  style={{
                                    color: "rgb(0, 255, 13)",
                                    marginRight: 5,
                                  }}
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                              ) : (
                                <i
                                  style={{ color: "red", marginRight: 5 }}
                                  className="fa fa-times"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              border: "solid 1px #f5f5f5",
                              backgroundColor: "#fff",
                            }}
                          >
                            <div
                              className="row d-flex justify-content-between"
                              style={{ margin: 0 }}
                            >
                              <div>
                                <i
                                  className="ml-2 mr-1 fa fa-superpowers"
                                  aria-hidden="true"
                                  style={{ color: "rgb(0, 255, 76)" }}
                                />
                                <span>{item.ans2}</span>
                              </div>
                              {item.ans2True ? (
                                <i
                                  style={{
                                    color: "rgb(0, 255, 13)",
                                    marginRight: 5,
                                  }}
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                              ) : (
                                <i
                                  style={{ color: "red", marginRight: 5 }}
                                  className="fa fa-times"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              border: "solid 1px #f5f5f5",
                              backgroundColor: "#fff",
                            }}
                          >
                            <div
                              className="row d-flex justify-content-between"
                              style={{ margin: 0 }}
                            >
                              <div>
                                <i
                                  className="ml-2 mr-1 fa fa-grav"
                                  aria-hidden="true"
                                  style={{ color: "rgb(0, 238, 255)" }}
                                />
                                <span>{item.ans3}</span>
                              </div>
                              {item.ans3True ? (
                                <i
                                  style={{
                                    color: "rgb(0, 255, 13)",
                                    marginRight: 5,
                                  }}
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                              ) : (
                                <i
                                  style={{ color: "red", marginRight: 5 }}
                                  className="fa fa-times"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              border: "solid 1px #f5f5f5",
                              backgroundColor: "#fff",
                            }}
                          >
                            <div
                              className="row d-flex justify-content-between"
                              style={{ margin: 0 }}
                            >
                              <div>
                                <i
                                  className="ml-1 mr-1 fa fa-ravelry"
                                  aria-hidden="true"
                                  style={{ color: "rgb(0, 255, 42)" }}
                                />
                                <span>{item.ans4}</span>
                              </div>
                              {item.ans4True ? (
                                <i
                                  style={{
                                    color: "rgb(0, 255, 13)",
                                    marginRight: 5,
                                  }}
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                              ) : (
                                <i
                                  style={{ color: "red", marginRight: 5 }}
                                  className="fa fa-times"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KahootDetail;