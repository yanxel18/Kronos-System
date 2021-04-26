import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import KronosContainer from "../components/container"
import KronosTopBar from "../components/topbar"
import KronosFooter from "../components/footer"  
import { useDispatch } from "react-redux";
import { BOARDSET } from "../actions/type"; 
export default function Viewing({ match, location }) {
    const dispatch = useDispatch(); 
        dispatch({ type: BOARDSET, payload: match.params.boardID });
  return ( 
    <React.Fragment>
      <CssBaseline />  
        <nav>
          <KronosTopBar />
        </nav>
        <main>  
          <KronosContainer/>
        </main> 
        <KronosFooter/>  
    </React.Fragment>  
  );
}
