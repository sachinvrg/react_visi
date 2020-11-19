/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Home from '../container/Home'
import About from '../container/About/About'

import Services from '../container/Services/Services'
import Cloud from '../container/Services/Cloud'
import ProcessAutomation from '../container/Services/ProcessAutomation'
import DataLake from '../container/Services/ProcessAutomation'
import DataEngineering from '../container/Services/DataEngineering'
import AdvancedAnalyticsAi from '../container/Services/AdvancedAnalyticsAi'

import ImprovedRustomerRetention from '../container/Solutions/ImprovedCustomerRetention'
import Chatbots from '../container/Solutions/Chatbots'
import CustomizedInvestments from '../container/Solutions/CustomizedInvestments'
import LifeTimeValuePrediction from '../container/Solutions/LifeTimeValuePrediction'

import ClaimsPredictions from '../container/Solutions/ClaimsPredictions'
import FludemicPrediction from '../container/Solutions/FludemicPrediction'
import DrugRecovery from '../container/Solutions/DrugRecovery'
import RiskProfileAnalyzer from '../container/Solutions/RiskProfileAnalyzer'

import SmartRiskPredictorAgileProcess from '../container/Solutions/SmartRiskPredictorAgileProcess'
import SuccessThroughSprints from '../container/Solutions/SuccessThroughSprints'
import ImprovementThroughDeepLearning from '../container/Solutions/ImprovementThroughDeepLearning'
import BusinessModelMakeover from '../container/Solutions/BusinessModelMakeover'
import StayingAheadCurveWith from '../container/Solutions/StayingAheadCurveWithAI'

import InventoryManage from '../container/Solutions/InventoryManage'
import AdaptiveHomepage from '../container/Solutions/AdaptiveHomepage'
import ConversationalSupport from '../container/Solutions/ConversationalSupport'
import DemandForecasting from '../container/Solutions/DemandForecasting'

import DrillingNptPredictor from '../container/Solutions/DrillingNptPredictor'
import IncidentAnalyzerPredictor from '../container/Solutions/IncidentAnalyzerPredictor'

import IntelligentDemandForecast from '../container/Solutions/IntelligentDemandForecast'

import TranspPlatform from '../container/Solutions/TranspPlatform'
import PandemicCrowdControl from '../container/Solutions/PandemicCrowdControl'
import PredictiveMaintenance from '../container/Solutions/PredictiveMaintenance'

import AirPollutionMonitoringPrediction from '../container/Solutions/AirPollutionMonitoringPrediction'

import Industries from '../container/Industries/Industries'
import Banking from '../container/Industries/Banking'
import Healthcare from '../container/Industries/Healthcare'
import Hightech from '../container/Industries/Hightech'
import Retail from '../container/Industries/Retail'
import Oilgas from '../container/Industries/Oilgas'
import Utility from '../container/Industries/Utility'
import TranspAndLogistic from '../container/Industries/TranspAndLogistic'
import Environmental from '../container/Industries/Environmental'
import ClinicalTrial from '../component/ClinicalTrial'
import BusinessProcess from '../component/BusinessProcess'
import AiPoweredProcessing from '../component/AiPoweredProcessing'
import Solution from '../component/Solution'
import CustomerEngage from '../component/CustomerEngage'
import CustomerInsights from '../component/CustomerInsights'
import DecisionSupports from '../component/DecisionSupports'
import DocumentProcessing from '../component/DocumentProcessing'
import ImplementHealthcare from '../component/ImplementHealthcare'
import Enterprise from '../component/Enterprise'
import EmailAutomation from '../component/EmailAutomation'
import PrivacyPolicy from '../component/PrivacyPolicy'
import RealTime from '../component/RealTime'
import ReductionNotPerforming from '../component/ReductionNotPerforming'
import RespResearchDev from '../component/RespResearchDev'
import SmartCheqe from '../component/SmartCheqe'
import SmartOptimization from '../component/SmartOptimization'
import SocialMedia from '../component/SocialMedia'
import SoftwareServices from '../component/SoftwareServices'
import DataInformation from '../container/Services/DataInformation'
import AiProwered from '../component/AiPowered'

import { Links } from './links'
import XmlData from '../component/XmlData'

import DataDriven from '../component/DataDriven'
export default function index() {
    return (
        <Router>
            <Header />
            <a href="#scrollPage" className="scroll-btn jump-2"><img src="img/svg/arrow.svg" /></a>
            <Switch>

                {/* service */}
                <Route path={Links.Services} component={Services} />
                <Route path={Links.Cloud} component={Cloud} />
                <Route path={Links.ProcessAutomation} component={ProcessAutomation} />
                <Route path={Links.DataLake} component={DataLake} />
                <Route path={Links.DataEngineering} component={DataEngineering} />
                <Route path={Links.AdvancedAnalyticsAi} component={AdvancedAnalyticsAi} />

                {/* solution */}
                {/* banking */}
                <Route path={Links.ImprovedRustomerRetention} component={ImprovedRustomerRetention} />
                <Route path={Links.Chatbots} component={Chatbots} />
                <Route path={Links.CustomizedInvestments} component={CustomizedInvestments} />
                <Route path={Links.LifeTimeValuePrediction} component={LifeTimeValuePrediction} />

                {/* healthcare */}
                <Route path={Links.ClaimsPredictions} component={ClaimsPredictions} />
                <Route path={Links.FludemicPrediction} component={FludemicPrediction} />
                <Route path={Links.DrugRecovery} component={DrugRecovery} />
                <Route path={Links.RiskProfileAnalyzer} component={RiskProfileAnalyzer} />

                {/* hightech */}
                <Route path={Links.SmartRiskPredictorAgileProcess} component={SmartRiskPredictorAgileProcess} />
                <Route path={Links.SuccessThroughSprints} component={SuccessThroughSprints} />
                <Route path={Links.ImprovementThroughDeepLearning} component={ImprovementThroughDeepLearning} />
                <Route path={Links.BusinessModelMakeover} component={BusinessModelMakeover} />
                <Route path={Links.StayingAheadCurveWith} component={StayingAheadCurveWith} />

                {/* retail */}
                <Route path={Links.InventoryManage} component={InventoryManage} />
                <Route path={Links.AdaptiveHomepage} component={AdaptiveHomepage} />
                <Route path={Links.ConversationalSupport} component={ConversationalSupport} />
                <Route path={Links.DemandForecasting} component={DemandForecasting} />

                {/* oilgas */}
                <Route path={Links.DrillingNptPredictor} component={DrillingNptPredictor} />
                <Route path={Links.IncidentAnalyzerPredictor} component={IncidentAnalyzerPredictor} />

                {/* utility */}
                <Route path={Links.IntelligentDemandForecast} component={IntelligentDemandForecast} />

                {/* transpAndLogistic */}
                <Route path={Links.TranspPlatform} component={TranspPlatform} />
                <Route path={Links.PandemicCrowdControl} component={PandemicCrowdControl} />
                <Route path={Links.PredictiveMaintenance} component={PredictiveMaintenance} />

                {/* environmental */}
                <Route path={Links.AirPollutionMonitoringPrediction} component={AirPollutionMonitoringPrediction} />

                {/* industries */}
                <Route path={Links.Industries} component={Industries} />
                <Route path={Links.Banking} component={Banking} />
                <Route path={Links.Healthcare} component={Healthcare} />
                <Route path={Links.Hightech} component={Hightech} />
                <Route path={Links.Retail} component={Retail} />
                <Route path={Links.Oilgas} component={Oilgas} />
                <Route path={Links.Utility} component={Utility} />
                <Route path={Links.TranspAndLogistic} component={TranspAndLogistic} />
                <Route path={Links.Environmental} component={Environmental} />
                {/* others */}

                <Route path={Links.ClinicalTrial} component={ClinicalTrial} />
                <Route path={Links.BusinessProcess} component={BusinessProcess} />
                <Route path={Links.AiPoweredProcessing} component={AiPoweredProcessing} />
                <Route path={Links.CustomerEngage} component={CustomerEngage} />
                <Route path={Links.CustomerInsights} component={CustomerInsights} />
                <Route path={Links.DecisionSupports} component={DecisionSupports} />
                <Route path={Links.DocumentProcessing} component={DocumentProcessing} />
                <Route path={Links.ImplementHealthcare} component={ImplementHealthcare} />
                <Route path={Links.Enterprise} component={Enterprise} />
                <Route path={Links.EmailAutomation} component={EmailAutomation} />
                <Route path={Links.PrivacyPolicy} component={PrivacyPolicy} />
                <Route path={Links.RealTime} component={RealTime} />
                <Route path={Links.ReductionNotPerforming} component={ReductionNotPerforming} />
                <Route path={Links.RespResearchDev} component={RespResearchDev} />
                <Route path={Links.SmartCheqe} component={SmartCheqe} />
                <Route path={Links.SmartOptimization} component={SmartOptimization} />
                <Route path={Links.SocialMedia} component={SocialMedia} />
                <Route path={Links.SoftwareServices} component={SoftwareServices} />
                <Route path={Links.Solution} component={Solution} />
                <Route path={Links.AiPowered} component={AiProwered} />
                <Route path={Links.DataInformation} component={DataInformation} />
                <Route path={Links.XmlData} component={XmlData} />
                <Route path={Links.DataDriven} component={DataDriven} />


                <Route path={Links.Home} component={Home}></Route>
                <Route path={Links.About} component={About} />
                <Route path='/' exact component={Home}></Route>



                <Redirect from='*' to="/" />
            </Switch>
            <Footer />
        </Router>
    )
}
