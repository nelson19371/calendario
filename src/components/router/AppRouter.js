import {
    BrowserRouter as Router,
    Routes,
    Route
    
    
  } from "react-router-dom";
  
import React from 'react';


import { LoginScreen } from '../auth/LoginScreen';
import { CalendarScreen } from '../calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        
            
              <Router>
                <div>
                  <Routes>
                      <Route exact path="/login" element={<LoginScreen/>}/>
                      <Route exact path="/" element={<CalendarScreen/>}/>

                      
                  </Routes>
                </div>
              </Router>
           
          
    )
}
