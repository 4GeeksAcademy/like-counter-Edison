import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [likes, setLikes ] = useState(0)

	let addLikes = () =>{
		setLikes(prevCont => prevCont +1)
	}
	let noLikes = () =>{
		setLikes(prevCont => prevCont - 1)
	}
	return (
			<div className=" d-flex justify-content-center align-items-center vh-100">
				<div className="row text-center">
					<p> {likes} likes </p>
						<div className="mb-3">
							<i className="fas fa-thumbs-up me-3" onClick={addLikes}></i>
							<i className="fas fa-thumbs-down" onClick={noLikes} ></i>
						</div>
					<p>Like or dislike to increase/ decrease</p>
				</div>	
			</div>
	);
};

export default Home;
