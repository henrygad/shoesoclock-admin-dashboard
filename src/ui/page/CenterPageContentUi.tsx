import type { ReactNode } from "react";

const CenterPageContentUi = ({ children }: { children: ReactNode }) => {
    return <div className="flex flex-1 justify-center py-6">
        <div className="flex flex-col max-w-[960px] flex-1">
            {children}
        </div>
    </div>;
};

export default CenterPageContentUi;
