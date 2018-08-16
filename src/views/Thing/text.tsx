import { Typography } from "@material-ui/core";
import LinkedRenderStore from "link-lib";
import * as React from "react";

import { ArticleTopology } from "../../canvasses";
import { TextProps, ThingTypes } from "../../helpers/types";

const ThingTextArticle = ({ linkedProp }) => (
    <Typography>{linkedProp.value}</Typography>
);

export default LinkedRenderStore.registerRenderer(
    ThingTextArticle,
    ThingTypes,
    TextProps,
    ArticleTopology,
);