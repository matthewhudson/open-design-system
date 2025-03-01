/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { action } from "@storybook/addon-actions"

import { Stack } from "../../../.storybook/components"
import { Headline } from "../Headline"

import { Card, CardHeader, CardFooter } from "."

export default {
  title: "Components/Card",
  component: Card,
  subcomponents: { CardHeader, CardFooter },
  tags: ["status:under-review"],
}

const Header = () => (
  <Headline size="s" as="h2">
    Card heading
  </Headline>
)

const Content = () => <p>This is some text showing in my card</p>

const Box = () => (
  <div
    style={{
      //background: "var(--cui-bg-highlight)",
      width: "15rem",
      height: "10rem",
    }}
  />
)

export const Base = () => <Card>Content</Card>

export const Spacings = () => (
  <Stack>
    <Card spacing="mega">
      <Box />
    </Card>
    <Card spacing="giga">
      <Box />
    </Card>
  </Stack>
)

export const WithHeader = () => (
  <Stack>
    <Card>
      <CardHeader>
        <Header />
      </CardHeader>
      <Content />
    </Card>

    <Card>
      <CardHeader
        onClose={action("CloseButton clicked")}
        closeButtonLabel="Close"
      >
        <Header />
      </CardHeader>
      <Content />
    </Card>
  </Stack>
)

export const WithFooter = () => (
  <Stack>
    <Card>
      <Content />
      <CardFooter>
        <p>Card Footer...</p>
      </CardFooter>
    </Card>

    <Card>
      <Content />
      <CardFooter align="left">
        <p>Card Footer...</p>
      </CardFooter>
    </Card>
  </Stack>
)
