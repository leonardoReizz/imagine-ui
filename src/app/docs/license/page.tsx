"use client";
import { PreviousAndNext } from "@/components/PreviousAndNext";
import { Typography } from "@imagine-ui/react";

export default function License() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <Typography variant="h6">
        Imagine UI (@imagine-ui) Software License Agreement
      </Typography>
      <Typography variant="sub-paragraph">
        This License Agreement (&quot;Agreement&quot;) is entered into between
        you (&quot;Licensee&quot;) and Imagine UI (&quot;Licensor&quot;),
        establishing the terms and conditions under which the user interface
        software known as Imagine UI, including any subsequent updates or
        enhancements (&quot;Software&quot;), is licensed for use by the
        Licensee.
      </Typography>

      <Typography bold>1. License Grant</Typography>

      <Typography variant="sub-paragraph">
        1.1. Grant of License: Subject to acceptance of this Agreement and
        compliance with its terms, Licensor grants Licensee a non-exclusive,
        non-transferable, and revocable license to use the Software in their
        applications and projects, subject to the restrictions set forth in this
        Agreement.
      </Typography>
      <Typography variant="sub-paragraph">
        1.2. Installation and Distribution: Licensee is authorized to download
        and install the Software via npm (Node Package Manager) and incorporate
        it into their applications. Licensee is not permitted to distribute,
        sublicense, sell, rent, or make the Software available in any manner to
        third parties, except as expressly provided in this Agreement.
      </Typography>
      <Typography bold>2. Restrictions</Typography>
      <Typography variant="sub-paragraph">
        2.1. Distribution of Paid Templates: Licensee acknowledges that in the
        future, Licensor may provide complementary paid templates for use with
        the Software. The distribution, resale, or commercial use of such
        templates by the Licensee is expressly prohibited. The sale and
        distribution of paid templates are exclusively reserved for the
        Licensor.
      </Typography>
      <Typography variant="sub-paragraph">
        2.2. Reverse Engineering and Modification: Licensee agrees not to
        reverse engineer, decompile, disassemble, or attempt to derive the
        source code of the Software. Any modification, adaptation, or derivative
        creation of the Software is strictly prohibited, unless expressly
        authorized by the Licensor.
      </Typography>
      <Typography bold>3. Intellectual Property</Typography>
      <Typography>
        3.1. Ownership of Intellectual Property: The Software, including all
        copyrights, trademarks, trade secrets, and other related intellectual
        property rights, is the exclusive property of the Licensor. Nothing in
        this Agreement grants Licensee any intellectual property rights in the
        Software, except for the rights expressly granted.
      </Typography>
      <Typography bold>4. Termination</Typography>
      <Typography>
        4.1. Termination for Breach: The Licensor reserves the right to
        terminate this Agreement immediately without prior notice if the
        Licensee breaches any of the clauses of this Agreement. Upon
        termination, Licensee must immediately cease all use of the Software and
        remove the Software from all their applications.
      </Typography>
      <Typography variant="sub-paragraph" bold>
        5. Disclaimer of Warranties
      </Typography>
      <Typography>
        5.1. No Warranties: The Software is provided &quot;as is,&quot; without
        warranties of any kind, whether express or implied. The Licensor does
        not warrant the suitability of the Software for any specific purpose or
        its error-free operation.
      </Typography>
      <Typography bold>6. Applicable Law</Typography>
      <Typography variant="sub-paragraph">
        6.1. Governing Law: This Agreement shall be governed by the laws of
        Brazil, without regard to its conflict of legal provisions. By using the
        Software, Licensee agrees to comply with the terms and conditions of
        this Agreement. Licensor reserves all rights not expressly granted in
        this Agreement. If you do not agree to the terms of this Agreement, do
        not use the Software.
      </Typography>
      <PreviousAndNext
        previous={{ label: "installation", path: "/docs/installation" }}
        next={{ label: "Theming", path: "/docs/theming" }}
      />
    </div>
  );
}
