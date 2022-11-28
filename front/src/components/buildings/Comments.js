import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import ArchiContext from "../../context/archiTour/archiContext";

function Comments({ reloadData }) {
	const archiContext = useContext(ArchiContext);
	const { building, user, addComment } = archiContext;

	const { comments } = building;

	const [text, setText] = useState("");
	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(text, user);
		addComment(building._id, user, text);
		console.log(comments);
		setText("");
		await reloadData();
	};

	// needs to show all comments
	return (
		<div>
			<div className='comments'>
				<h3>Comments:</h3>
				{comments === undefined ? (
					<div></div>
				) : (
					<div>
						{comments.map((comment,i) => (
							<div key={i}>
								<div>{comment.comment}</div>
								<div>
									{comment.username === "" || comment.username === undefined
										? "Anonymous User"
										: comment.username}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			<div className='addcomments'>
				<form className='form' onSubmit={onSubmit}>
					<input
						type='text'
						name='text'
						placeholder='Add Comments Here'
						value={text}
						onChange={onChange}
					/>
					<input type='submit' value='Add' className='btn btn-dark btn-block' />
				</form>
			</div>
		</div>
	);
}
Comments.propTypes = {
	reloadData: PropTypes.func.isRequired,
};
export default Comments;
