import { useLocation } from "react-router-dom";

export const UsePath = () => {
    const IsCurrentPage = (link: string) => {
        const { pathname } = useLocation();

        if (link === pathname) return true;

        return false;
    };

    return {
        IsCurrentPage,
    };
};