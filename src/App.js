import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import IndexPage from "./pages/home/IndexPage";
import AboutPage from "./pages/about/AboutPage";
import BoardMembersPage from "./pages/about/BoardMembersPage";
import SignUpPage from "./pages/authentication/SignUpPage";
import SignInPage from "./pages/authentication/SignInPage";
import ResetPasswordPage from "./pages/authentication/ResetPasswordPage";
import ForgotPasswordPage from "./pages/authentication/ForgotPasswordPage";
import ChangePasswordPage from "./pages/authentication/ChangePasswordPage";
import MessagesPage from "./pages/contact/MessagesPage";
import OfficesPage from "./pages/contact/OfficesPage";
import SocialMediaPage from "./pages/contact/SocialMediaPage";
import EventDetailPage from "./pages/events/EventDetailPage";
import CreateQuizPage from "./pages/fun/quiz/CreateQuizPage";
import QuizzesPage from "./pages/fun/quiz/QuizzesPage";
import QuizDetailPage from "./pages/fun/quiz/QuizDetailPage";
import FactsPage from "./pages/fun/FactsPage";
import QuestionsPage from "./pages/fun/QuestionsPage";
import WinnersPage from "./pages/fun/WinnersPage";
import ImagesPage from "./pages/media/ImagesPage";
import VideosPage from "./pages/media/VideosPage";
import OperationsPage from "./pages/media/operations/OperationsPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import ServicesPage from "./pages/services/ServicesPage";
import DashboardPage from "./pages/stats/DashboardPage";
import EventsPage from "./pages/events/EventsPage";
import AddImagePage from "./pages/media/AddImagePage";
import AddVideoPage from "./pages/media/AddVideoPage";
import CreateOperationPage from "./pages/media/operations/CreateOperationPage";
import CreateServicePage from "./pages/services/CreateServicePage";
import SubmissionDetailPage from "./pages/fun/quiz/SubmissionDetailPage";
import CreateMemberPage from "./pages/about/CreateMemberPage";
import CreateOfficePage from "./pages/contact/CreateOfficePage";
import CreateEventPage from "./pages/events/CreateEventPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <IndexPage/>
                </Route>

                <Route path="/about">
                    <AboutPage/>
                </Route>

                <Route path="/members">
                    <BoardMembersPage/>
                </Route>

                <Route path="/register">
                    <SignUpPage/>
                </Route>

                <Route path="/login">
                    <SignInPage/>
                </Route>
                <Route path="/reset-password">
                    <ResetPasswordPage/>
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordPage/>
                </Route>
                <Route path="/change-password">
                    <ChangePasswordPage/>
                </Route>

                <Route path="/messages">
                    <MessagesPage/>
                </Route>
                <Route path="/offices">
                    <OfficesPage/>
                </Route>
                <Route path="/social-media">
                    <SocialMediaPage/>
                </Route>

                <Route path="/events/:eventId">
                    <EventDetailPage/>
                </Route>
                <Route path="/events">
                    <EventsPage/>
                </Route>
                <Route path="/new/quiz">
                    <CreateQuizPage/>
                </Route>

                <Route path="/quizzes/:quiz/submissions/:submission" exact={true}>
                    <SubmissionDetailPage/>
                </Route>

                <Route path="/quizzes/:quizId">
                    <QuizDetailPage/>
                </Route>

                <Route path="/quizzes">
                    <QuizzesPage/>
                </Route>

                <Route path="/new/quiz">
                    <CreateQuizPage/>
                </Route>

                <Route path="/facts">
                    <FactsPage/>
                </Route>
                <Route path="/questions">
                    <QuestionsPage/>
                </Route>

                <Route path="/winners">
                    <WinnersPage/>
                </Route>

                <Route path="/images">
                    <ImagesPage/>
                </Route>
                <Route path="/videos">
                    <VideosPage/>
                </Route>

                <Route path="/operations">
                    <OperationsPage/>
                </Route>

                <Route path="/reviews">
                    <ReviewsPage/>
                </Route>

                <Route path="/services">
                    <ServicesPage/>
                </Route>

                <Route path="/dashboard">
                    <DashboardPage/>
                </Route>


                <Route path="/new/images" exact={true}>
                    <AddImagePage/>
                </Route>
                <Route path="/new/videos" exact={true}>
                    <AddVideoPage/>
                </Route>

                <Route path="/new/operation" exact={true}>
                    <CreateOperationPage/>
                </Route>

                <Route path="/new/service" exact={true}>
                    <CreateServicePage/>
                </Route>

                <Route path="/new/member" exact={true}>
                    <CreateMemberPage/>
                </Route>

                <Route path="/new/office" exact={true}>
                    <CreateOfficePage/>
                </Route>

                <Route path="/new/event" exact={true}>
                    <CreateEventPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
