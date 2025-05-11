import { inngest } from "../../../inngest/client";
import { helloWorld } from "@/lib/inngest/function";
import { serve } from "inngest/next";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve(
inngest,
  [
    helloWorld,
  ],
);