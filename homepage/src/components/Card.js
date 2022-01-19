import React from "react";
import "./Card.css";

// function Card() {
//     return (
// <div className='card'>
//     {/* <h1>Test</h1> */}
//     Test
// </div>
//         )

//     }

// ex-2
const Card = (props) => (
  // <div className='card'>
  //   <h2 className='eventName'>The Benefits of Green Apples</h2>
  //   <div>3/2/2019</div>
  //   <div>
  //     Green apples have a high fiber content which helps in increasing the
  //     body's metabolism. While consuming an apple, make sure that you're not
  //     tossing the peel in the trash. Consuming apple with its peel improves the
  //     overall health. Due to its high fiber content, apple helps in
  //     detoxification process. It keeps the liver and digestive system away from
  //     harmful elements.
  //   </div>

  // ex2
  <div class="row">
    <div class="example-1 card">
      <div class="wrapper">
        {/* <div class="date">
        <span class="day">12</span>
        <span class="month">Aug</span>
        <span class="year">2016</span>
      </div> */}

        <div class="image">
          <img class="book-image" src="./event.png" />
        </div>

        <div class="data">
          <div class="content">
            {/* <span class="author">Jane Doe</span> */}
            <h1 class="eventName">
              <a href="" class="cardTitle">
                Event Name
              </a>
            </h1>
            <h2 class="org">Organiser</h2>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero
              hic sint molestiae? Eius, et quia accusamus suscipit laboriosam at
              veritatis perferendis maxime deleniti blanditiis velit ratione
              distinctio ab aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
