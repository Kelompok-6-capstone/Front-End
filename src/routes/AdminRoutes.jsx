import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "../pages/admin/AdminLogin";
import Dashboard from "../pages/admin/Dashboard";
import UsersPage from "../pages/admin/Users";
import TransactionPage from "../pages/admin/Transactions";
import ArticlesPage from "../pages/admin/ArticlesPage";
import AdminProtectedRoute from "./AdminProtectedRoute";

const AdminRoutes = () => (
    <Routes>
        <Route path="login" element={<AdminLoginPage />} />
        <Route
            path="dashboard"
            element={
                <AdminProtectedRoute>
                    <Dashboard />
                </AdminProtectedRoute>
            }
        />
        <Route
            path="users"
            element={
                <AdminProtectedRoute>
                    <UsersPage />
                </AdminProtectedRoute>
            }
        />
        <Route
            path="transaction"
            element={
                <AdminProtectedRoute>
                    <TransactionPage />
                </AdminProtectedRoute>
            }
        />
        <Route
            path="article"
            element={
                <AdminProtectedRoute>
                    <ArticlesPage />
                </AdminProtectedRoute>
            }
        />
    </Routes>
);

export default AdminRoutes;
