import { ReactNode } from "react";

export interface ICardProps{
    title: string;
    children?: ReactNode;
    actions?: ReactNode;
    onClick?: () => void;
}