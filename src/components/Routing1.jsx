import { Routes, Route } from "react-router-dom";
import { About } from "./R1About";
import { Contact } from "./R1Contact";
import { Home } from "./R1Home";
import { Navbar } from "./R1Navbar";
import { Users } from "./R1Users";
import { UserPage } from "./R1UserPage";
import { PrivateRoute } from "./R1PrivateRoute";
import { Login } from "./R1Login";

export const Routing1 = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={
        <PrivateRoute>
        <Users />
        </PrivateRoute>} />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
