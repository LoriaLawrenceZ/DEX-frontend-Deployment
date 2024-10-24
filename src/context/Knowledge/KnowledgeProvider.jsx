import KnowledgeContext from "./KnowledgeContext.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

KnowledgeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function KnowledgeProvider({ children }) {
    const [fileAlertName, setFileAlertName] = useState("");
    const [isFileUploadErrorAlertVisible, setIsFileUploadErrorAlertVisible] = useState(false);
    const [fileUploadErrorMessage, setFileUploadErrorMessage] = useState("");
    const [isFileUploadSuccessAlertVisible, setIsFileUploadSuccessAlertVisible] = useState(false);
    const [fileUploadSuccessMessage, setFileUploadSuccessMessage] = useState("");
    const [files, setFiles] = useState([]);
    
    return (
        <KnowledgeContext.Provider value={{
            fileAlertName, setFileAlertName,
            isFileUploadErrorAlertVisible, setIsFileUploadErrorAlertVisible,
            fileUploadErrorMessage, setFileUploadErrorMessage,
            isFileUploadSuccessAlertVisible, setIsFileUploadSuccessAlertVisible,
            fileUploadSuccessMessage, setFileUploadSuccessMessage,
            files, setFiles
        }}>
            {children}
        </KnowledgeContext.Provider>
    );
}

export default KnowledgeProvider;