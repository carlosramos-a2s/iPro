import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IntakeFormProvider } from './context/IntakeFormContext'
import { NewAppProvider } from './context/NewAppContext'
import { ListApplicationsProvider } from './context/ListApplicationsContext'
import IntakeForm from './components/IntakeForm';
import ListApplications from './components/ListApplications';
import NewApplicationForm from './components/NewApplicationForm';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={
            <ListApplicationsProvider>
              <ListApplications />
            </ListApplicationsProvider>
        }/>
        <Route path="/submitform" element={
          < NewAppProvider>
            <NewApplicationForm />
          </NewAppProvider>
        } />
        <Route path="/datalist" element={
            <ListApplicationsProvider>
              <ListApplications />
            </ListApplicationsProvider>
        }/>
        <Route path="/intakeform" element={
            <IntakeFormProvider>
              <IntakeForm />
            </IntakeFormProvider>
        }/>
      </Routes>
    </div>
  );
}

export default App;