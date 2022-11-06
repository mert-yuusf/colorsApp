import React, {useEffect, useState} from "react";

const ColorBox = ({percent, color, textColor}) => {
	const [alert,setAlert] = useState(false);


	useEffect(()=>{
		setTimeout(()=>{
			setAlert(false);
		},1000)
	},[alert])



	return (
		<>
			<div className="d-flex border border-2 border-dark mb-1 flex-nowrap">
				<p className="p-1 my-auto w-25 fw-bold text-center me-1">{percent}</p>
				<span
					className="color-box w-75 flex-fill d-flex py-1 justify-content-center align-content-center"
					style={{background: `#${color}`}}
					onClick={()=>{
						setAlert(true);
						navigator.clipboard.writeText(color);
					}}
				>
					<p className={`my-auto fw-bold ${textColor}`}>
						{
							alert ? "copied" : `#${color}`
						}
					</p>
				</span>
			</div>
		</>
	)
}

export default ColorBox;