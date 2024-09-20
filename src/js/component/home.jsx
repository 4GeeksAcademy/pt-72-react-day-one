import React, { useState, useEffect } from "react";
import Card from "./card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center pt-5">
			<Card title={"Grogu"} date={"09/20"} img={"https://cdn.mos.cms.futurecdn.net/nyU6UyNw4B4QVLj69n5hbe.jpg"} desc={"Very Powerful Boy"} />
			<Card title={"Mando"} date={"09/19"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGJRbH_iwP9pM6Pjx0QdQUXeQPqY4cp3Cag&s"} desc={"I kind of think he is in a cult"} />
			<Card title={"Bluey"} date={"08/20"} img={"https://upload.wikimedia.org/wikipedia/en/4/48/Bluey_%282018_TV_series%29_title_card.jpg"} desc={"Austrailian Shepard"} />
			<Card title={"Pikachu"} date={"08/30"} img={"https://howtodrawforkids.com/wp-content/uploads/2021/05/How-to-draw-pikachu-for-kids.jpg"} desc={"Don't trust his down b"} />
			<Card title={"Surprised Pikachu"} date={"08/29"} img={"https://img-new.cgtrader.com/items/4015394/c87b3a8473/large/pikachu-surprised-shocked-for-3d-printing-3d-model-c87b3a8473.jpg"} desc={"Whhaa"} />

		</div>
	);
};

export default Home;
