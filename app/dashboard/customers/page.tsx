import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Customers() {
    return <p>Customer Page</p>
}