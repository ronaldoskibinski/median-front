import { Article } from "@/models/article";

export type RootStackParamList = {
    "(tabs)": undefined;
    "+not-found": undefined;
    article: { article: Article };
};