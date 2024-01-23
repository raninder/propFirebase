import { useState } from 'react';
import Range from './Range'
import '../styles/range.css' 

function RangeBars() {
  const [marketValue,setMarketValue] = useState(10900)
	const [percentValue, setPercentValue] = useState(45)
	const [depositValue, setDepositValue] = useState(10900)
	const [mortgageValue, setMortgageValue] = useState(6.45)
	const [amortValue, setAmortValue] = useState(30)

  const handleMarketChange = e => {
    e.preventDefault();
    const mvalue = parseFloat(e.target.value);
		console.log("nvalue", mvalue);
		setMarketValue(mvalue);
  };
	const handlePercentChange = e => {
    e.preventDefault();
    const pvalue = parseFloat(e.target.value);
		console.log("pvalue", pvalue);
		setPercentValue(pvalue);
  };
	const handleDepositChange = e => {
    e.preventDefault();
    const dvalue = parseFloat(e.target.value);
		console.log("dvalue", dvalue);
		setDepositValue(dvalue);
  };
	const handleMortgageChange = e => {
    e.preventDefault();
    const mgvalue = parseFloat(e.target.value);
		console.log("pvalue", mgvalue);
		setMortgageValue(mgvalue);
  };
	const handleAmortChange = e => {
    e.preventDefault();
    const avalue = parseFloat(e.target.value);
		console.log("nvalue", avalue);
		setAmortValue(avalue);
  };

  return (
		<div className="range">
    
     <Range
		 		min={1000} 
		 	 	max={500000} 
				step={1000}
       	handleChange={handleMarketChange}
       	value1={marketValue} 
				// value2={""}
				title= {"Full Market Value" }
			/>
			<Range
		 		min={1} 
		 	 	max={100} 
				step={10}
       	handleChange={handlePercentChange}
       	value1={percentValue} 
				value2={marketValue}
				title= {"Share percentages" }
			/>
			<Range
		 		min={1000} 
		 	 	max={500000} 
				step={1000}
       	handleChange={handleDepositChange}
       	value1={depositValue} 
				// value2={""}
				title= {"Deposit Amount" }
			/>
			<Range
		 		min={1} 
		 	 	max={10} 
				step={.1}
       	handleChange={handleMortgageChange}
       	value1={mortgageValue} 
				title= {"Mortgage Rate" }
			/>
			<Range
		 		min={1} 
		 	 	max={32} 
				step={0.5}
       	handleChange={handleAmortChange}
       	value3={amortValue} 
				title= {"Amortization" }
			/>
			<div className="heading">
				<span className="title"> Frequency</span>
				<span><button className="freq">Monthly</button><button>Bi weekly</button></span> 
			</div>
			</div>
  );
}

export default RangeBars;