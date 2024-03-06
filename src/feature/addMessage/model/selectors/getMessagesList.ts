import { StateSchema } from "@/app/providers/StoreProvider";

export const getMessagesList = (state: StateSchema) =>
 state.addMessage.messagesList;
