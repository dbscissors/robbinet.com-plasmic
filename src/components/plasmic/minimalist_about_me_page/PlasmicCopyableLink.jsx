/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eoegRZLK3vC9oQRMs68jaA
// Component: yOLNk7IXhKOn
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: eoegRZLK3vC9oQRMs68jaA/projectcss
import sty from "./PlasmicCopyableLink.module.css"; // plasmic-import: yOLNk7IXhKOn/css

createPlasmicElementProxy;

export const PlasmicCopyableLink__VariantProps = new Array();

export const PlasmicCopyableLink__ArgProps = new Array("children");

const $$ = {};

function PlasmicCopyableLink__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"16px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"12px"}
        src={
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMiAxNiIgaGVpZ2h0PSIxNiIgd2lkdGg9IjEyIj4KPHBhdGggZmlsbD0iI0ZBRkFGQSIgZD0iTTEwLjA1MjEgMTUuMjM5Nkg1Ljk3OTAyQzUuNjI2NDQgMTUuMjM5NiA1LjM0MDYxIDE0Ljk1MzcgNS4zNDA2MSAxNC42MDEyQzUuMzQwNjEgMTQuMjQ4NiA1LjYyNjQ0IDEzLjk2MjcgNS45NzkwMiAxMy45NjI3SDEwLjA1MjFDMTAuMjcxNyAxMy45NjI4IDEwLjQ1MDggMTMuNzg2NiAxMC40NTQzIDEzLjU2NjlWNi4yMTg4M0MxMC40NTQxIDYuMTEzNzggMTAuNDEyOSA2LjAxMjk2IDEwLjMzOTQgNS45Mzc5M0w4LjM1MzkxIDMuOTUyNDdDOC4yNzkyNiAzLjg3ODM2IDguMTc4MTkgMy44MzcwMiA4LjA3MzAxIDMuODM3NTZINC40NzIzN0M0LjI1Mjc0IDMuODQxMDQgNC4wNzY1MyA0LjAyMDEgNC4wNzY1NiA0LjIzOTc1VjE0LjYxMzlDNC4wNzY1NiAxNC45NjY1IDMuNzkwNzMgMTUuMjUyMyAzLjQzODE1IDE1LjI1MjNDMy4wODU1NiAxNS4yNTIzIDIuNzk5NzQgMTQuOTY2NSAyLjc5OTc0IDE0LjYxMzlWNC4yMzk3NUMyLjgwMzI1IDMuMzE0OTUgMy41NTM5NSAyLjU2NzExIDQuNDc4NzYgMi41NjcxMkg4LjA3OTM5QzguNTI1MDEgMi41NjU2IDguOTUyNjggMi43NDI2NCA5LjI2NjgzIDMuMDU4N0wxMS4yNTIzIDUuMDQ0MTVDMTEuNTY2NiA1LjM1OTUgMTEuNzQzMyA1Ljc4NjM5IDExLjc0MzkgNi4yMzE2VjEzLjU3OTdDMTEuNzMzMyAxNC41MDQ1IDEwLjk3NjkgMTUuMjQ2NyAxMC4wNTIxIDE1LjIzOTZaTTEuNTE2NTMgMTIuMDQ2OFYxLjY3MjY0QzEuNTIwMDIgMS40NTMgMS42OTkwNyAxLjI3Njc5IDEuOTE4NzMgMS4yNzY4Mkg2LjE1Nzc3QzYuNTEwMzYgMS4yNzY4MiA2Ljc5NjE5IDAuOTkwOTk1IDYuNzk2MTkgMC42Mzg0MTFDNi43OTYxOSAwLjI4NTgyNiA2LjUxMDM2IDAgNi4xNTc3NyAwSDEuOTE4NzNDMC45OTM5MjYgMC4wMDM1MTYzOSAwLjI0NjA4NyAwLjc1NDIxIDAuMjQ2MDk0IDEuNjc5MDJWMTIuMDUzMkMwLjI0NjA5NCAxMi40MDU4IDAuNTMxOTIgMTIuNjkxNiAwLjg4NDUwNCAxMi42OTE2QzEuMjM3MDkgMTIuNjkxNiAxLjUyMjkxIDEyLjQwNTggMS41MjI5MSAxMi4wNTMyTDEuNTE2NTMgMTIuMDQ2OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="
        }
      />

      <PlasmicLink__
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        href={"mailto:careers@narative.co"}
        platform={"react"}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {renderPlasmicSlot({
            defaultContents: "careers@narative.co",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </PlasmicLink__>
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"copied"}
      </div>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "link", "freeBox", "text"],
  img: ["img"],
  link: ["link", "freeBox"],
  freeBox: ["freeBox"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCopyableLink__ArgProps,
          internalVariantPropNames: PlasmicCopyableLink__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCopyableLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyableLink";
  } else {
    func.displayName = `PlasmicCopyableLink.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyableLink = Object.assign(
  // Top-level PlasmicCopyableLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCopyableLink
    internalVariantProps: PlasmicCopyableLink__VariantProps,
    internalArgProps: PlasmicCopyableLink__ArgProps
  }
);

export default PlasmicCopyableLink;
/* prettier-ignore-end */
