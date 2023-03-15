import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import CreateChatbotForm from "@/Components/CreateChatbot/CreateChatbotForm";


export default function CreateChatbot() {

    return (
        <AppLayout
            title="Create Chatbot"
            renderHeader={() => (
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Chatbot
                </h2>
            )}   
        >
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <CreateChatbotForm />
                </div>
            </div>
        </div>
        </AppLayout>
    )
}
