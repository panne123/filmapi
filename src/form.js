import React from 'react'

const form = () => {
    return (
        <>
    <div className="h-tag">
	<h2>Create Your Account</h2>
	</div>
	{/* <!-- create account div --> */}
	<div className="login">
	<table cellspacing="2" align="center" cellpadding="8" border="0">
	<tr>
	<td align="right">Enter Name :</td>
	<td><input type="text" placeholder="Enter user here" id="t1" className="tb" /></td>
	</tr>
	<tr>
	<td align="right">Enter Email ID :</td>
	<td><input type="text" placeholder="Enter Email ID here" id="t2" className="tb" /></td>
	</tr>
	<tr>
	<td align="right">Enter Username :</td>
	<td><input type="text" placeholder="Enter Username here" id="t3" className="tb" /></td>
	</tr>
	<tr>
	<td align="right">Enter Password :</td>
	<td><input type="password" placeholder="Enter Password here" id="t4" className="tb" /></td>
	</tr>
	<tr>
	<td align="right">Enter Confirm Password :</td>
	<td><input type="password" placeholder="Enter Password here" id="t5" className="tb" /></td>
	</tr>
	<tr>
	<td></td>
	<td>
	<input type="reset" value="Clear Form" onclick="clearFunc()" id="res" className="btn" />
	<input type="submit" value="Create Account" className="btn" onclick="registration()" /></td>
	</tr>
	</table>
    </div>
        </>
    )
}

export default form;
