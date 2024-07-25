"use client";
import { Provider as ReduxProvider } from "react-redux";
import { Toaster } from "sonner";
import { sonner } from "@/theme/theme-config";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/redux/store";
import LayoutWrapper from "../layoutWrapper/LayoutWrapper";
// import Spinner from "@/Spinner/Spinner";

// react query
const queryClient = new QueryClient();

const Provides = (children) => {
  return (
    <>
      <Toaster
        position={sonner.position}
        expand={sonner.expand}
        closeButton={sonner.closeButton}
        richColors={sonner.richColors}
        visibleToasts={sonner.visibleToasts}
        // loadingIcon={<Spinner size={20} />}
        toastOptions={{
          duration: sonner.toastOptions.duration,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ReduxProvider>
      </QueryClientProvider>
    </>
  );
};

export default Provides;
