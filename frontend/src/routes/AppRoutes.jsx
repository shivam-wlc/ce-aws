// eslint-disable-next-line simple-import-sort/imports
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import InitialLoaders from "../loaders/InitialLoaders";
import Workspace from "../pages/Workspace.jsx";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "../redux/slices/authSlice.js";
import CreatorProfile from "../pages/CreatorProfile.jsx";
import Layout from "../components/Layout.jsx";

// Import components lazily
const Home = React.lazy(() => import("../pages/Home"));
const Explore = React.lazy(() => import("../pages/Explore"));
const AssessmentCenter = React.lazy(() => import("../pages/AssessmentCenter"));
const Register = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));
const ForgetPassword = React.lazy(() => import("../pages/ForgetPassword"));
const CreateNewPassword = React.lazy(() => import("../pages/CreateNewPassword"));
const InvalidPages = React.lazy(() => import("../pages/InvalidPages"));
const ExploreVideoPlay = React.lazy(() => import("../pages/ExploreVideoPlay"));
const CareerInfo = React.lazy(() => import("../components/onet/CareerInfo.jsx"));
const InterestProfiler = React.lazy(() => import("../components/onet/InterestProfiler.jsx"));
const Result = React.lazy(() => import("../components/onet/Result.jsx"));
const VerifyEmail = React.lazy(() => import("../pages/EmailVerification.jsx"));
const PaymentConfirmation = React.lazy(() => import("../pages/PaymentConfirmation.jsx"));
const HowItWorks = React.lazy(() => import("../pages/HowItWorks.jsx"));
const GeneratePdf = React.lazy(() => import("../components/onet/DetailedPdf.jsx"));
const ResumeBuilderPage = React.lazy(() => import("../pages/ResumeBuilder.jsx"));
const ResumeDashboardPage = React.lazy(() => import("../components/resumeBuilder/ResumeDashboard.jsx"));
const DiscAssessment = React.lazy(() => import("../pages/DiscAssessment.jsx"));
const SurveyPage = React.lazy(() => import("../pages/SurveyPage.jsx"));
const SingleResultPage = React.lazy(() => import("../pages/SingleResultPage.jsx"));
const Pricing = React.lazy(() => import("../pages/Pricing.jsx"));
const AboutUs = React.lazy(() => import("../pages/AboutUs.jsx"));
const TermsAndConditons = React.lazy(() => import("../pages/TermsAndConditons.jsx"));
const PrivacyAndPolicy = React.lazy(() => import("../pages/PrivacyAndPolicy.jsx"));
const AssessmentResult = React.lazy(() => import("../pages/AssessmentResult.jsx"));
const AssessmentResult1 = React.lazy(() => import("../pages/AssessmentResult1.jsx"));

const AppRoutes = () => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={<InitialLoaders />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/explore"
          element={
            <Suspense fallback={<InitialLoaders />}>
              <Explore />
            </Suspense>
          }
        />
        <Route
          path="/assessment"
          element={
            <Suspense fallback={<InitialLoaders />}>
              <AssessmentCenter />
            </Suspense>
          }
        />
        <Route
          path="resume-builder"
          element={
            <Suspense fallback={<InitialLoaders />}>
              <ResumeBuilderPage />
            </Suspense>
          }
        />
        <Route
          path="/resume-dashboard"
          element={
            <Suspense fallback={<InitialLoaders />}>
              <ResumeDashboardPage />
            </Suspense>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <Suspense fallback={<InitialLoaders />}>
              <HowItWorks />
            </Suspense>
          }
        />{" "}
        <Route
          path="/profile/:userId"
          element={
            <Suspense fallback={<InitialLoaders />}>
              <CreatorProfile />
            </Suspense>
          }
        />
        <Route
          path="/pricing"
          element={
            <Suspense fallback={<InitialLoaders />}>
              <Pricing />
            </Suspense>
          }
        />
      </Route>
      \
      <Route
        path="/register"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/forget-password"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <ForgetPassword />
          </Suspense>
        }
      />
      <Route
        path="/create-new-password"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <CreateNewPassword />
          </Suspense>
        }
      />
      <Route
        path="/workspace/:id"
        element={
          <Suspense fallback={<InitialLoaders />}>{authenticated ? <Workspace /> : <Login />}</Suspense>
        }
      />
      <Route
        path="/video/:videoId"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <ExploreVideoPlay />
          </Suspense>
        }
      />
      <Route
        path="/interest-profiler"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <InterestProfiler />
          </Suspense>
        }
      />
      <Route
        path="/interest-profiler/result"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <Result />
          </Suspense>
        }
      />
      <Route
        path="/career"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <CareerInfo />
          </Suspense>
        }
      />
      <Route
        path="/verify-email"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <VerifyEmail />
          </Suspense>
        }
      />
      <Route
        path="/paymentprocess"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <PaymentConfirmation />
          </Suspense>
        }
      />
      <Route
        path="/generate-assessmnet-pdf"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <GeneratePdf />
          </Suspense>
        }
      />
      {/* Resume Routes  */}
      <Route
        path="/disc"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <DiscAssessment />
          </Suspense>
        }
      />
      <Route
        path="/survey"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <SurveyPage />
          </Suspense>
        }
      />
      <Route
        path="/careerrexploreranalysis"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <SingleResultPage />
          </Suspense>
        }
      />
      {/* About us page  */}
      <Route
        path="/about-us"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <AboutUs />
          </Suspense>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <TermsAndConditons />
          </Suspense>
        }
      />
      <Route
        path="/privacy-and-policy"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <PrivacyAndPolicy />
          </Suspense>
        }
      />
      <Route
        path="/assessment-result"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <AssessmentResult />
          </Suspense>
        }
      />
      <Route
        path="/assessment-result1"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <AssessmentResult1 />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<InitialLoaders />}>
            <InvalidPages />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
