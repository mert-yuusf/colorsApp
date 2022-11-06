import React, {useEffect, useState} from "react";
import ColorBox from "./ColorBox";
import Values from "values.js";
import rgbHex from "rgb-hex";

const ColorColumn = ({value, heading}) => {
	const [color, setColor] = useState(value);
	const [list, setList] = useState([]);
	const populateList = (color) => {
		const values = new Values(color).all(10)
		const listHex = values.map(value => {
			return {
				hex: rgbHex(value.rgb.join(',')),
				weight: value.weight
			}
		});
		setList(listHex);
	}
	const onColorChange = (e) => {
		setColor(e.target.value);
		populateList(color);
	}

	useEffect(() => {
		populateList(color);
	}, [])
	return (
		<>
			{/*Primary Col*/}
			<div className="col-12 col-md-3">
				<div className="card border border-2 border-dark color-column">
					<div className="card-header">
						<h5 className="text-uppercase fw-bold fs-6">{heading}</h5>
					</div>
					<div className="card-body">
						<div className="input-group  input-group-sm rounded-0 flex-nowrap">
							<span className="input-group-text bg-white">
								<input
									type="color"
									name="colorField"
									id="colorField"
									className="form-control form-control-color"
									value={color}
									onChange={onColorChange}
								/>
							</span>
							<input
								type="text"
								className="form-control shadow-none"
								placeholder="Color hex"
								aria-label="ColorHex"
								aria-describedby="addon-wrapping"
								value={color}
								readOnly={true}
								onChange={onColorChange}
							/>
						</div>
					</div>
					<div className="card-footer bg-white">
						{
							list.map((color, index) => {
								const {hex, weight} = color;
								return <ColorBox key={index} percent={weight} color={hex}
												 textColor={index > list.length / 2 ? "text-white" : "text-dark"}></ColorBox>
							})
						}
					</div>
				</div>
			</div>
			{/*Primary Col*/}
		</>
	)
}

export default ColorColumn;