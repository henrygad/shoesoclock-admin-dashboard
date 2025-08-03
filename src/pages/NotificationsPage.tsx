

const NotificationPage = () => {
    return <>
        <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#171212] tracking-light text-[32px] font-bold leading-tight">Notifications</p>
                <p className="text-[#82686a] text-sm font-normal leading-normal">Stay updated on your store's activity</p>
            </div>
        </div>
        <h3 className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Today</h3>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#171212] flex items-center justify-center rounded-lg bg-[#f4f1f1] shrink-0 size-12" data-icon="Package" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[#171212] text-base font-medium leading-normal line-clamp-1">New order #12345 placed by Sarah Lee</p>
                <p className="text-[#82686a] text-sm font-normal leading-normal line-clamp-2">10:30 AM</p>
            </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#171212] flex items-center justify-center rounded-lg bg-[#f4f1f1] shrink-0 size-12" data-icon="Package" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[#171212] text-base font-medium leading-normal line-clamp-1">Product 'Eco-Friendly Water Bottle' is low in stock</p>
                <p className="text-[#82686a] text-sm font-normal leading-normal line-clamp-2">11:15 AM</p>
            </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#171212] flex items-center justify-center rounded-lg bg-[#f4f1f1] shrink-0 size-12" data-icon="Star" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[#171212] text-base font-medium leading-normal line-clamp-1">Customer Mark Johnson left a review for 'Organic Cotton T-Shirt'</p>
                <p className="text-[#82686a] text-sm font-normal leading-normal line-clamp-2">12:45 PM</p>
            </div>
        </div>
        <h3 className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Yesterday</h3>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#171212] flex items-center justify-center rounded-lg bg-[#f4f1f1] shrink-0 size-12" data-icon="Percent" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M205.66,61.64l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.31ZM50.54,101.44a36,36,0,0,1,50.92-50.91h0a36,36,0,0,1-50.92,50.91ZM56,76A20,20,0,1,0,90.14,61.84h0A20,20,0,0,0,56,76ZM216,180a36,36,0,1,1-10.54-25.46h0A35.76,35.76,0,0,1,216,180Zm-16,0a20,20,0,1,0-5.86,14.14A19.87,19.87,0,0,0,200,180Z"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[#171212] text-base font-medium leading-normal line-clamp-1">Discount code 'SUMMER20' is expiring soon</p>
                <p className="text-[#82686a] text-sm font-normal leading-normal line-clamp-2">9:00 AM</p>
            </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#171212] flex items-center justify-center rounded-lg bg-[#f4f1f1] shrink-0 size-12" data-icon="User" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[#171212] text-base font-medium leading-normal line-clamp-1">New customer account created by Emily Chen</p>
                <p className="text-[#82686a] text-sm font-normal leading-normal line-clamp-2">2:30 PM</p>
            </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#171212] flex items-center justify-center rounded-lg bg-[#f4f1f1] shrink-0 size-12" data-icon="CreditCard" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[#171212] text-base font-medium leading-normal line-clamp-1">Payment received for order #12340</p>
                <p className="text-[#82686a] text-sm font-normal leading-normal line-clamp-2">4:45 PM</p>
            </div>
        </div>
    </>;
};

export default NotificationPage;

