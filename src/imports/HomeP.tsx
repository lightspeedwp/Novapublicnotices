import clsx from "clsx";
import svgPaths from "./svg-7620hsb276";
import imgComponentsPlacholdersImage from "figma:asset/6d7b656990d35fa9cff3500f0450e5375401b114.png";
import imgComponentsPlacholdersImage1 from "figma:asset/233942096c93e2da5375d8b594ecf591f47ccce7.png";
import imgImage33 from "figma:asset/192909820b52bd4d34188c7bbd6ca013ac6c241b.png";
import imgComponentsPlacholdersImage2 from "figma:asset/0317c584a8e1f3a10f5f3bdf5b72315e1c71c385.png";
import imgComponentsPlacholdersImage3 from "figma:asset/4f5142c388ea184cb9bb70b2b7aeae7ac8615892.png";
import imgComponentsPlacholdersImage4 from "figma:asset/44845c45d2ba0964d08425e72da3f7ea8b23b976.png";
import imgComponentsPlacholdersImage5 from "figma:asset/a728f0174aaad5385919db29d0145b6d9212f070.png";
import imgComponentsPlacholdersImage6 from "figma:asset/871ad41467b390594b32d7f0f940eafb115114f3.png";
import imgComponentsPlacholdersImage7 from "figma:asset/40666136b1d4eb182a9138f3fb0ce26fa937c994.png";
import imgComponentsPlacholdersImage8 from "figma:asset/b7c3f6580debb92f704bb83cd29c4b24ce82c028.png";
import imgComponentsPlacholdersImage9 from "figma:asset/b9675f8005adf67aefdb3b1ac71d16d487bd08f2.png";
import imgComponentsPlacholdersImage10 from "figma:asset/a18bea3cdafec92bb3b6fb9dd52fbbddd8210bbe.png";
import imgNovusMediaEEditionCover1 from "figma:asset/68b2fe49904bd6e517474d559faa54150371d3b5.png";
import imgComponentsPlacholdersImage11 from "figma:asset/579f9eb44ff33c79a7e071f18acd6eff66a12f56.png";
import imgComponentsPlacholdersImage12 from "figma:asset/8ae2fcdb9aac67a8331e5a7177186faea85fbe38.png";
import imgImage21 from "figma:asset/f7e3eb354eef1e52b70713067b4b60195a098623.png";
import imgAvb23071220341FcjLogoRedesignFinalNnV1021 from "figma:asset/bf31c00d31e9d6b0aa74851cf10beaca6b8d93d4.png";
import imgWanIfraLgo1 from "figma:asset/859074e88559a583fa1c01cc73c2075a8f58908c.png";
type Wrapper1Props = {
  text: string;
  additionalClassNames?: string;
};

function Wrapper1({ children, text, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col gap-[5px] items-center justify-center p-[5px] relative">
        <div className="bg-[#35713a] h-[90px] relative shrink-0 w-[728px]" data-name="Ad 728 X 90">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className={clsx("content-stretch flex items-center justify-center relative", additionalClassNames)}>
              <p className="font-['Lexend:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-white uppercase whitespace-nowrap">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[5px] items-center relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-end min-h-px min-w-px relative">{children}</div>
        </div>
      </div>
    </div>
  );
}
type HomePText4Props = {
  text: string;
  additionalClassNames?: string;
};

function HomePText4({ text, additionalClassNames = "" }: HomePText4Props) {
  return (
    <div className={clsx("content-stretch flex relative", additionalClassNames)}>
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#282828] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HomePFooterLinkTextProps = {
  text: string;
};

function HomePFooterLinkText({ text }: HomePFooterLinkTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start py-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[#282828] text-[12px]">{text}</p>
      </div>
    </div>
  );
}

function MediumCardHorizontal() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start pb-[10px] relative w-full">
          <div className="relative shrink-0 size-[100px]" data-name="Components/Placholders/Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage11} />
          </div>
          <Content1 text="Source:" text1="by" text2="on" />
        </div>
      </div>
    </div>
  );
}
type AuthorCardFooter1Props = {
  text: string;
  text1: string;
};

function AuthorCardFooter1({ text, text1 }: AuthorCardFooter1Props) {
  return (
    <Wrapper>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">{text}</p>
      <TinyHeadingLinkText text="Ash Shaw" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">{text1}</p>
      <TinyHeadingLinkText text="28 June 2025" />
    </Wrapper>
  );
}
type SponsoredSourceLinkBannerTextProps = {
  text: string;
};

function SponsoredSourceLinkBannerText({ text }: SponsoredSourceLinkBannerTextProps) {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#2c2c2c] text-[12px] whitespace-nowrap">{text}</p>
      <div className="h-[16px] relative shrink-0 w-[45px]" data-name="vista-site-logo">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 16">
          <g id="vista-site-logo">
            <path clipRule="evenodd" d={svgPaths.p1a1f8b0} fill="var(--fill-0, #221F20)" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p2378bc00} fill="var(--fill-0, #221F20)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p3f5fb400} fill="var(--fill-0, #221F20)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p38847100} fill="var(--fill-0, #EC2026)" fillRule="evenodd" id="Vector_4" />
            <path clipRule="evenodd" d={svgPaths.p25fc2700} fill="var(--fill-0, #EC2026)" fillRule="evenodd" id="Vector_5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type Content1Props = {
  text: string;
  text1: string;
  text2: string;
};

function Content1({ text, text1, text2 }: Content1Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title & Category">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center relative w-full">
              <p className={`font-["Raleway:SemiBold",sans-serif] font-semibold leading-[normal] relative text-[16px] tracking-[-0.02px] ${"Default" === "Hover" && "Novus" === "Novus" ? "flex-[1_0_0] min-h-px min-w-px text-[#09082f]" : "Default" === "Default" && "Novus" === "Novus" ? "flex-[1_0_0] min-h-px min-w-px text-[#2c2c2c]" : "Default" === "Hover" && "Novus" === "PE Express" ? "flex-[1_0_0] min-h-px min-w-px text-[#d70025]" : "shrink-0 text-[#2c2c2c] w-[160px]"}`}>Gqeberha constable killed with own service firearm on New Year’s Eve</p>
            </div>
          </div>
        </div>
      </div>
      <SponsoredSourceLinkBannerText text={text} />
      <AuthorCardFooter1 text={text1} text1={text2} />
    </div>
  );
}
type RowProps = {
  additionalClassNames?: string;
};

function Row({ additionalClassNames = "" }: RowProps) {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
            <HomePComponentsPlacholdersImageImage1 additionalClassNames="h-[240px] w-full" />
            <HomePContent text="category" text1="Massive Storm Causes Flooding in Parts of Port Elizabeth" text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque lorem..." />
            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
            <HomePComponentsPlacholdersImageImage />
            <HomePContent text="category" text1="Police Crack Down on Illegal Street Racing in PE" text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque lorem..." />
            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
            <HomePComponentsPlacholdersImageImage2 additionalClassNames="h-[240px] w-full" />
            <HomePContent text="category" text1="Municipality Announces Major Infrastructure Upgrades for 2025" text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque lorem..." />
            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type HomePPollInputsTextProps = {
  text: string;
};

function HomePPollInputsText({ text }: HomePPollInputsTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[5px] items-start relative shrink-0 w-full" data-name="Poll input">
        <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-name="Radio Button">
          <RadioButton className="block cursor-pointer overflow-clip relative rounded-[50px] shrink-0 size-[20px]" />
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#2c2c2c] text-[16px]">{text}</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <TitleCategory text="Sport" text1="Lorem ipsum dolor sit amet, consectetur adipiscing." />
    </div>
  );
}
type HomePText3Props = {
  text: string;
  additionalClassNames?: string;
};

function HomePText3({ text, additionalClassNames = "" }: HomePText3Props) {
  return (
    <div className={clsx("content-stretch flex items-start pt-[10px] relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32.4px] min-h-px min-w-px relative text-[#09082f] text-[24px] tracking-[-0.02px] uppercase">{text}</p>
    </div>
  );
}
type HomePComponentsPlacholdersImageImage2Props = {
  additionalClassNames?: string;
};

function HomePComponentsPlacholdersImageImage2({ additionalClassNames = "" }: HomePComponentsPlacholdersImageImage2Props) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage7} />
    </div>
  );
}
type TinyHeadingLinkTextProps = {
  text: string;
};

function TinyHeadingLinkText({ text }: TinyHeadingLinkTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative">
          <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#09082f] text-[12px] tracking-[-0.02px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type HomePHelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function HomePHelper({ text, text1, text2, text3 }: HomePHelperProps) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[5px] items-center relative w-full">
        <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-end min-h-px min-w-px relative">
          <TinyHeadingLinkText text={text} />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">{text1}</p>
          <TinyHeadingLinkText text={text2} />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#111] text-[12px]">{text3}</p>
        </div>
      </div>
    </div>
  );
}
type TitleCategoryProps = {
  text: string;
  text1: string;
};

function TitleCategory({ text, text1 }: TitleCategoryProps) {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <div className="h-[22px] relative shrink-0 w-[253.333px]" data-name="Medium Card Category Link">
        <p className="absolute font-['Raleway:Bold',sans-serif] font-bold inset-0 leading-[21.6px] text-[#09082f] text-[12px] tracking-[-0.02px] uppercase">{text}</p>
      </div>
      <div className="relative shrink-0 w-full" data-name="H4 Link">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative w-full">
            <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#2c2c2c] text-[20px] tracking-[-0.02px]">{text1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type HomePContentProps = {
  text: string;
  text1: string;
  text2: string;
};

function HomePContent({ text, text1, text2 }: HomePContentProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <TitleCategory text={text} text1={text1} />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">{text2}</p>
    </div>
  );
}
type HomePComponentsPlacholdersImageImage1Props = {
  additionalClassNames?: string;
};

function HomePComponentsPlacholdersImageImage1({ additionalClassNames = "" }: HomePComponentsPlacholdersImageImage1Props) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage6} />
    </div>
  );
}
type HomePText2Props = {
  text: string;
  additionalClassNames?: string;
};

function HomePText2({ text, additionalClassNames = "" }: HomePText2Props) {
  return (
    <div className={clsx("content-stretch flex items-center relative", additionalClassNames)}>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#2c2c2c] text-[20px] underline whitespace-nowrap">{text}</p>
    </div>
  );
}
type HomePTinyCardTextProps = {
  text: string;
};

function HomePTinyCardText({ text }: HomePTinyCardTextProps) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
            <div className="relative shrink-0 w-full" data-name="Small Subheading Link">
              <div className="content-stretch flex items-start relative w-full">
                <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#2c2c2c] text-[16px] tracking-[0.16px]">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}
type HomePButtonSmallSecondaryTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HomePButtonSmallSecondaryText({ text, additionalClassNames = "" }: HomePButtonSmallSecondaryTextProps) {
  return (
    <div className={clsx("bg-white cursor-pointer relative rounded-[4px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <Text1 text={text} additionalClassNames="w-full" />
      </div>
    </div>
  );
}
type LeaderboardAdProps = {
  additionalClassNames?: string;
};

function LeaderboardAd({ additionalClassNames = "" }: LeaderboardAdProps) {
  return (
    <div className="bg-[#e4e4e4] relative shrink-0">
      <Wrapper1 text="728 x 90 Ad" additionalClassNames="size-full" />
    </div>
  );
}
type AuthorCardFooterProps = {
  text: string;
  text1: string;
};

function AuthorCardFooter({ text, text1 }: AuthorCardFooterProps) {
  return (
    <Wrapper>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">{text}</p>
      <HomePTinyHeadingLinkText text="Ash Shaw" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">{text1}</p>
      <HomePTinyHeadingLinkText text="28 June 2025" />
    </Wrapper>
  );
}
type HomePText1Props = {
  text: string;
  additionalClassNames?: string;
};

function HomePText1({ text, additionalClassNames = "" }: HomePText1Props) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative w-full">
          <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#2c2c2c] text-[16px] tracking-[-0.02px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type HomePMediumCardCategoryLinkTextProps = {
  text: string;
};

function HomePMediumCardCategoryLinkText({ text }: HomePMediumCardCategoryLinkTextProps) {
  return (
    <div className="h-[22px] relative shrink-0 w-[253.333px]">
      <p className="absolute font-['Raleway:Bold',sans-serif] font-bold inset-0 leading-[21.6px] text-[#d70025] text-[12px] tracking-[-0.02px] uppercase">{text}</p>
    </div>
  );
}
type HomePTinyHeadingLinkTextProps = {
  text: string;
};

function HomePTinyHeadingLinkText({ text }: HomePTinyHeadingLinkTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative">
          <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#d70025] text-[12px] tracking-[-0.02px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

function HomePComponentsPlacholdersImageImage() {
  return (
    <div className="h-[240px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage} />
    </div>
  );
}
type HomePTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HomePText({ text, additionalClassNames = "" }: HomePTextProps) {
  return (
    <div className={clsx("content-stretch flex pt-[10px] relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32.4px] min-h-px min-w-px relative text-[#d70025] text-[24px] tracking-[-0.02px] uppercase">{text}</p>
    </div>
  );
}
type HomePNavLinkTextProps = {
  text: string;
};

function HomePNavLinkText({ text }: HomePNavLinkTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#282828] text-[16px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type HomePVectorProps = {
  additionalClassNames?: string;
};

function HomePVector({ additionalClassNames = "" }: HomePVectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6425 4.64395">
        <path d={svgPaths.p1aaa8580} fill="var(--fill-0, #549CBE)" id="Vector" />
      </svg>
    </div>
  );
}
type HomePUpperNavLinkTextProps = {
  text: string;
};

function HomePUpperNavLinkText({ text }: HomePUpperNavLinkTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}

function HelperbuttonHelper() {
  return (
    <div className="absolute inset-[11.54%]">
      <div className="absolute inset-[-3.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3846 16.3846">
          <circle cx="8.19231" cy="8.19231" fill="var(--fill-0, white)" id="Ellipse 5" r="7.69231" stroke="var(--stroke-0, #2C2C2C)" />
        </svg>
      </div>
    </div>
  );
}
type RadioButtonProps = {
  className?: string;
  type?: "Default" | "Active" | "Selected" | "Disabled";
};

function RadioButton({ className, type = "Default" }: RadioButtonProps) {
  if (type === "Active") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative rounded-[50px] size-[20px]"} data-name="Type=Active">
        <HelperbuttonHelper />
      </button>
    );
  }
  if (type === "Selected") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative rounded-[50px] size-[20px]"} data-name="Type=Selected">
        <HelperbuttonHelper />
        <div className="absolute flex inset-[23.08%] items-center justify-center">
          <div className="-scale-y-100 flex-none size-[10.769px]">
            <div className="relative size-full">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7692 10.7692">
                <circle cx="5.38462" cy="5.38462" fill="var(--fill-0, #2C2C2C)" id="Ellipse 6" r="5.38462" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-[38.46%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.61538 4.61538">
            <circle cx="2.30769" cy="2.30769" fill="var(--fill-0, white)" id="Ellipse 7" r="2.30769" />
          </svg>
        </div>
      </button>
    );
  }
  if (type === "Disabled") {
    return (
      <div className={className || "overflow-clip relative rounded-[50px] size-[20px]"} data-name="Type=Disabled">
        <div className="absolute inset-[11.54%]">
          <div className="absolute inset-[-3.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3846 16.3846">
              <circle cx="8.19231" cy="8.19231" fill="var(--fill-0, white)" id="Ellipse 5" r="7.69231" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "block cursor-pointer overflow-clip relative rounded-[50px] size-[20px]"} data-name="Type=Default">
      <div className="absolute inset-[11.54%]">
        <div className="absolute inset-[-3.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3846 16.3846">
            <circle cx="8.19231" cy="8.19231" fill="var(--fill-0, white)" id="Ellipse 5" r="7.69231" stroke="var(--stroke-0, #959595)" />
          </svg>
        </div>
      </div>
    </button>
  );
}
type BannerCardCategoryLinkProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function BannerCardCategoryLink({ className, property1 = "Default" }: BannerCardCategoryLinkProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[24px] relative w-[575px] ${isVariant2 ? "cursor-pointer" : ""}`}>
      <p className={`absolute font-["Inter:SemiBold",sans-serif] font-semibold inset-0 leading-[24px] not-italic text-[#d70025] text-[16px] uppercase ${isVariant2 ? "[text-decoration-skip-ink:none] decoration-solid underline" : ""}`}>Category</p>
    </div>
  );
}
type NovusSearchIconProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function NovusSearchIcon({ className, state = "Default" }: NovusSearchIconProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || `relative size-[24px] ${isHover ? "cursor-pointer" : ""}`}>
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2138c8f1} id="Vector" stroke={isHover ? "var(--stroke-0, #09082F)" : "var(--stroke-0, #2C2C2C)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type HeaderSocialIconsProps = {
  className?: string;
  icon?: "facebook" | "instagram" | "linkedin" | "x" | "youtube";
};

function HeaderSocialIcons({ className, icon = "facebook" }: HeaderSocialIconsProps) {
  const isInstagram = icon === "instagram";
  const isLinkedin = icon === "linkedin";
  const isX = icon === "x";
  const isYoutube = icon === "youtube";
  return (
    <div className={className || "overflow-clip relative rounded-[100px] size-[32px]"}>
      <div className={`absolute ${isYoutube ? "inset-[28.84%_19.91%]" : isLinkedin ? "bottom-[26.25%] left-1/4 right-[26.25%] top-1/4" : isX ? "bottom-[28.06%] left-1/4 right-1/4 top-[27.5%]" : isInstagram ? "inset-[20%]" : "inset-[22.5%_23.33%_23.6%_22.5%]"}`} data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isYoutube ? "0 0 19.2593 13.545" : isLinkedin ? "0 0 15.6 15.6" : isX ? "0 0 16 14.2222" : isInstagram ? "0 0 19.2 19.2" : "0 0 17.3333 17.2467"}>
          <path d={isYoutube ? svgPaths.pb1c9180 : isLinkedin ? svgPaths.paa9ed00 : isX ? svgPaths.p21d5c980 : isInstagram ? svgPaths.p31874c00 : svgPaths.p1d0c3f2} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type SocialIconProps = {
  className?: string;
  state?: "Default" | "Hover" | "Pressed";
};

function SocialIcon({ className, state = "Default" }: SocialIconProps) {
  return (
    <div className={className || `relative rounded-[100px] w-[32px] ${state === "Pressed" ? "" : "cursor-pointer"}`}>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        {["Hover", "Pressed"].includes(state) && (
          <div className="overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Header Social Icons">
            <div className="absolute inset-[22.5%_23.33%_23.6%_22.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3333 17.2467">
                <path d={svgPaths.p1d0c3f2} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        )}
        {state === "Default" && <HeaderSocialIcons className="overflow-clip relative rounded-[100px] shrink-0 size-[32px]" />}
      </div>
    </div>
  );
}
type NavMenuProps = {
  className?: string;
  state?: "Default" | "Hover" | "Pressed";
};

function NavMenu({ className, state = "Default" }: NavMenuProps) {
  const isHoverOrPressed = ["Hover", "Pressed"].includes(state);
  const isPressed = state === "Pressed";
  return (
    <div className={className || `relative ${isPressed ? "" : "cursor-pointer"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center relative">
          <div className="relative shrink-0 size-[24px]" data-name="heroicons-outline/bars-3">
            <div className="absolute inset-0 overflow-clip" data-name="heroicons-outline/bars-3">
              <div className="absolute inset-[28.13%_15.63%]" data-name="Vector">
                <div className={`absolute ${isHoverOrPressed ? "inset-[-7.14%_-4.55%]" : "inset-[-9.52%_-6.06%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isHoverOrPressed ? "0 0 18 12" : "0 0 18.5 12.5"}>
                    <path d={isHoverOrPressed ? svgPaths.p110b7c50 : svgPaths.p392c3100} id="Vector" stroke={isHoverOrPressed ? "var(--stroke-0, #0F172A)" : "var(--stroke-0, white)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHoverOrPressed ? "1.5" : "2"} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Upper Nav Link">
            <p className={`font-["Inter:Regular",sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap ${isPressed ? "text-[#ccc]" : state === "Hover" ? "text-[#dedede]" : "text-white"}`}>Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeP({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white relative"} data-name="Home (P)">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center relative">
          <div className="absolute bottom-0 h-[4196.919921875px] left-[51px] pointer-events-none top-0">
            <div className="content-stretch flex flex-col h-[192px] items-start justify-end pointer-events-auto sticky top-0 z-[8]" data-name="Return Frame">
              <div className="opacity-40 rounded-[8px] shrink-0 sticky top-0" data-name="Return Button">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex isolate items-start p-[10px] relative">
                    <div className="flex items-center justify-center relative shrink-0 z-[1]">
                      <div className="flex-none rotate-180">
                        <div className="h-[12px] relative w-[21px]" data-name="TSP Arrow">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 12">
                            <g id="Group 51">
                              <path d={svgPaths.p261e2d80} fill="var(--fill-0, #00A60E)" id="Path 116" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-3 border-[#00a60e] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-[1440px] z-[7]" data-name="Novus Header">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col isolate items-center justify-center pb-[10px] relative w-full">
                <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full z-[1]" data-name="Content">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Upper Nav & Ad">
                    <div className="bg-[#09082f] content-stretch flex items-center justify-center overflow-clip py-[5px] relative shrink-0 w-full" data-name="Upper Nav">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1100px]" data-name="Container">
                        <div className="content-stretch cursor-pointer flex gap-[30px] items-center relative shrink-0" data-name="Navigation">
                          <NavMenu className="relative shrink-0" />
                          <HomePUpperNavLinkText text="Publications" />
                          <HomePUpperNavLinkText text="Events" />
                          <HomePUpperNavLinkText text="Contact" />
                          <HomePUpperNavLinkText text="FAQs" />
                          <HomePUpperNavLinkText text="Newsletter Subscribe" />
                        </div>
                        <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Content">
                          <div className="content-stretch cursor-pointer flex items-start relative shrink-0" data-name="Social Links">
                            <SocialIcon className="relative rounded-[100px] shrink-0 w-[32px]" />
                            <SocialIcon className="relative rounded-[100px] shrink-0 w-[32px]" />
                            <SocialIcon className="relative rounded-[100px] shrink-0 w-[32px]" />
                            <SocialIcon className="relative rounded-[100px] shrink-0 w-[32px]" />
                            <SocialIcon className="relative rounded-[100px] shrink-0 w-[32px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#e4e4e4] relative shrink-0 w-full" data-name="Leaderboard Ad">
                      <Wrapper1 text="728 x 90 Leaderboard Ad" additionalClassNames="size-full" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-name="Content">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1100px]" data-name="Container">
                      <div className="h-[48px] overflow-clip relative shrink-0 w-[240px]" data-name="Nova_News_Dark">
                        <div className="absolute inset-[19.04%_74.86%_16.72%_13.03%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.0606 30.8384">
                            <path d={svgPaths.p25835500} fill="var(--fill-0, #09082F)" id="Vector" />
                          </svg>
                        </div>
                        <div className="absolute inset-[19.94%_62.34%_17.62%_25.55%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.0625 29.9681">
                            <path d={svgPaths.p7199471} fill="var(--fill-0, #09082F)" id="Vector" />
                          </svg>
                        </div>
                        <div className="absolute inset-[19.94%_51.41%_17.62%_36.54%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9237 29.9681">
                            <path d={svgPaths.p192a2f80} fill="var(--fill-0, #09082F)" id="Vector" />
                          </svg>
                        </div>
                        <div className="absolute inset-[18.33%_39.62%_16.97%_50.34%]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0956 31.0578">
                            <g id="Group">
                              <path d={svgPaths.p93c9c00} fill="var(--fill-0, #D3000D)" id="Vector" />
                              <path d={svgPaths.p3809ca80} fill="var(--fill-0, #D3000D)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute inset-[18.33%_27.81%_16.96%_63.85%]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0212 31.0597">
                            <g id="Group">
                              <path d={svgPaths.p101bc100} fill="var(--fill-0, #D3000D)" id="Vector" />
                              <path d={svgPaths.p3ece6280} fill="var(--fill-0, #D3000D)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute inset-[18.33%_10.62%_16.97%_73.19%]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8613 31.0597">
                            <g id="Group">
                              <path d={svgPaths.pba5b480} fill="var(--fill-0, #D3000D)" id="Vector" />
                              <path d={svgPaths.p19a8a2f0} fill="var(--fill-0, #D3000D)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute inset-[17.43%_0.53%_16.24%_90.34%]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.93 31.84">
                            <g id="Group">
                              <path d={svgPaths.pfb100} fill="var(--fill-0, #D3000D)" id="Vector" />
                              <path d={svgPaths.p343d7100} fill="var(--fill-0, #D3000D)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                        <HomePVector additionalClassNames="inset-[2.71%_97.28%_87.62%_0.79%]" />
                        <HomePVector additionalClassNames="inset-[86.6%_88.57%_3.73%_9.5%]" />
                        <div className="absolute inset-[15.93%_88.57%_16.67%_4.37%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9578 32.3557">
                            <path d={svgPaths.p4cdea00} fill="var(--fill-0, #09082F)" id="Vector" />
                          </svg>
                        </div>
                        <div className="absolute inset-[15.86%_92.15%_15.9%_0.79%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9578 32.7552">
                            <path d={svgPaths.pe824f00} fill="var(--fill-0, #09082F)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Header Buttons">
                        <div className="bg-[#09082f] relative rounded-[4px] shrink-0" data-name="Button Small - Community">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative">
                              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-justify text-white whitespace-nowrap">
                                <p className="leading-[1.5]">Catalogues</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#d70025] relative rounded-[4px] shrink-0">
                          <div className="flex flex-row items-center justify-center size-full">
                            <Text text="Our Publications" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[1440px]" data-name="Navigation">
                      <div className="content-stretch flex items-center justify-between pr-[40px] py-[10px] relative shrink-0 w-[1100px]" data-name="Content">
                        <div aria-hidden="true" className="absolute border-[#959595] border-b border-solid border-t inset-0 pointer-events-none" />
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Nav links">
                          <HomePNavLinkText text="Home" />
                          <HomePNavLinkText text="News" />
                          <HomePNavLinkText text="Nuus" />
                          <div className="relative shrink-0" data-name="Nav Link">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center relative">
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#282828] text-[16px] whitespace-nowrap">{`Schools `}</p>
                              </div>
                            </div>
                          </div>
                          <HomePNavLinkText text="School Rugby" />
                          <HomePNavLinkText text="Sport" />
                          <HomePNavLinkText text="Business" />
                          <HomePNavLinkText text="Lifestyle" />
                          <HomePNavLinkText text="Recipes" />
                          <HomePNavLinkText text="E-Editions" />
                          <HomePNavLinkText text="Supplements" />
                        </div>
                        <div className="cursor-pointer relative shrink-0" data-name="My Account Icon">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex items-center relative">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="user (1) 1">
                                <div className="absolute contents inset-[5%_10%]" data-name="Group">
                                  <div className="absolute inset-[5%_10%]" data-name="Icon">
                                    <div className="absolute inset-[-2.22%_-2.5%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8 18.8">
                                        <g id="Icon">
                                          <g id="Group">
                                            <path clipRule="evenodd" d={svgPaths.p27eb6b80} fill="var(--fill-0, #111111)" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #111111)" strokeWidth="0.8" />
                                          </g>
                                          <path clipRule="evenodd" d={svgPaths.p21a70900} fill="var(--fill-0, #111111)" fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, #111111)" strokeWidth="0.8" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[24px] left-[756px] top-[10px]" data-name="Nav Search - Novus">
                          <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex h-full items-start justify-center relative">
                              <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0" data-name="Content">
                                <button className="content-stretch cursor-pointer flex items-start relative shrink-0 size-[24px]" data-name="Search Button">
                                  <NovusSearchIcon className="overflow-clip relative shrink-0 size-[24px]" />
                                </button>
                                <div className="bg-white content-stretch flex items-start justify-end p-[12px] relative shrink-0 w-[344px]" data-name="Input Field">
                                  <div aria-hidden="true" className="absolute border border-[#959595] border-solid inset-0 pointer-events-none" />
                                  <div className="content-stretch flex items-start relative shrink-0" data-name="Search Button">
                                    <div className="relative shrink-0 size-[24px]" data-name="heroicons-outline/magnifying-glass">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                        <g id="heroicons-outline/magnifying-glass">
                                          <path d={svgPaths.p2d924000} id="Vector" stroke="var(--stroke-0, #2C2C2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full z-[6]" data-name="News Section">
            <div className="content-stretch flex gap-[20px] items-start pb-[10px] relative shrink-0 w-[1100px]" data-name="Container">
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center min-h-px min-w-px relative" data-name="News Section">
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Content">
                  <div className="bg-white relative shrink-0 w-full" data-name="Section Title">
                    <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
                      <HomePText text="Top stories" additionalClassNames="gap-[10px] items-end" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Contents">
                    <div className="bg-white relative shrink-0 w-full" data-name="Banner Card">
                      <div className="content-stretch flex gap-[20px] items-start overflow-clip pb-[10px] relative rounded-[inherit] w-full">
                        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[300px]" data-name="Components/Placholders/Image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Content">
                          <BannerCardCategoryLink className="h-[24px] relative shrink-0 w-full" />
                          <div className="relative shrink-0 w-full" data-name="H2 Link">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center relative w-full">
                                <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[24px] text-black tracking-[-0.02px]">4-month-old among five dead, six injured in head-on crash on N2 Reporter</p>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">A 4-month-old baby is among five people who died yesterday in a head-on collision on the N2 between Nanaga and…</p>
                          <Wrapper>
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">by</p>
                            <HomePTinyHeadingLinkText text="Ash Shaw" />
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">on</p>
                            <HomePTinyHeadingLinkText text="3 June 2025" />
                          </Wrapper>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Content">
                      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Row">
                        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card Horizontal">
                          <div className="content-stretch flex gap-[10px] items-start overflow-clip py-[10px] relative rounded-[inherit] w-full">
                            <div className="relative shrink-0 size-[100px]" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage1} />
                            </div>
                            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Content">
                              <div className="content-stretch flex flex-col h-[41px] items-start relative shrink-0" data-name="Title & Category">
                                <HomePMediumCardCategoryLinkText text="Recipes" />
                                <HomePText1 text="This is a sponsored post tile" additionalClassNames="w-[243.333px]" />
                              </div>
                              <div className="relative shrink-0" data-name="Sponsored Link Card">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[5px] items-center relative">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2c2c2c] text-[12px] whitespace-nowrap">Sponsored by</p>
                                    <div className="h-[14px] relative shrink-0 w-[80px]" data-name="image 33">
                                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <img alt="" className="absolute h-[317.54%] left-[-0.02%] max-w-none top-[-109.36%] w-[100.03%]" src={imgImage33} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <AuthorCardFooter text="by" text1="on" />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
                        </div>
                        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card Horizontal">
                          <div className="content-stretch flex gap-[10px] items-start overflow-clip py-[10px] relative rounded-[inherit] w-full">
                            <div className="relative shrink-0 size-[100px]" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage2} />
                            </div>
                            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[243.333px]" data-name="Content">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title & Category">
                                <HomePMediumCardCategoryLinkText text="Recipes" />
                                <div className="relative shrink-0 w-full" data-name="H4 Link">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center relative w-full">
                                      <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#2c2c2c] text-[16px] tracking-[-0.02px]">{`This is a post with an Overview `}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <AuthorCardFooter text="by" text1="on" />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Row">
                        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card Horizontal">
                          <div className="content-stretch flex gap-[10px] items-start overflow-clip py-[10px] relative rounded-[inherit] w-full">
                            <div className="relative shrink-0 size-[100px]" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage3} />
                            </div>
                            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[243.333px]" data-name="Content">
                              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title & Category">
                                <HomePMediumCardCategoryLinkText text="News" />
                                <div className="relative shrink-0 w-[243.333px]" data-name="H4 Link">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center relative w-full">
                                      <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#2c2c2c] text-[16px] tracking-[-0.02px]">{`This is a post with sensitive content `}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <AuthorCardFooter text="by" text1="on" />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
                        </div>
                        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card Horizontal">
                          <div className="content-stretch flex gap-[10px] items-start overflow-clip py-[10px] relative rounded-[inherit] w-full">
                            <div className="relative shrink-0 size-[100px]" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage4} />
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Content">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <HomePMediumCardCategoryLinkText text="News" />
                                <HomePText1 text="This is a post with an English and an Afrikaans version" additionalClassNames="w-full" />
                              </div>
                              <AuthorCardFooter text="by" text1="on" />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#2c2c2c] text-[20px] underline w-full">Read more Top Stories</p>
                </div>
                <LeaderboardAd />
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[310px]" data-name="Side Column">
                <div className="bg-[#356130] relative rounded-[2px] shrink-0 w-full" data-name="In Focus Widget">
                  <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[20px] relative w-full">
                      <div className="aspect-[80/80] relative shrink-0 w-full" data-name="Components/Placholders/Image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage5} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Category & Title">
                          <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.02px] w-full">This is an In Focus Widget title</p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative shrink-0 w-full" data-name="Text">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque lorem.</p>
                          <HomePButtonSmallSecondaryText text="Find out more" additionalClassNames="w-[160px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Section">
                  <div className="bg-white relative shrink-0 w-full" data-name="Section Title">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <HomePText text="Most read" additionalClassNames="items-start justify-between" />
                    </div>
                  </div>
                  <HomePTinyCardText text="Government Announces Bold Energy Plan to Tackle Load Shedding" />
                  <HomePTinyCardText text="Government Announces Bold Energy Plan to Tackle Load Shedding" />
                  <HomePTinyCardText text="Global Markets React as Interest Rates Surge in Major Economies" />
                  <div className="relative shrink-0 w-full" data-name="Small Body Link">
                    <div className="flex flex-row items-center size-full">
                      <HomePText2 text="Read all the Most Read Articles" additionalClassNames="w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center py-[10px] relative shrink-0 w-[1440px] z-[5]" data-name="Section">
            <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-[1100px]" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-center justify-center min-h-px min-w-px relative" data-name="Content">
                <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="News Cards">
                  <div className="bg-white relative shrink-0 w-full" data-name="Section Title">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[10px] items-start pt-[10px] relative w-full">
                        <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32.4px] min-h-px min-w-px relative text-[#09082f] text-[24px] tracking-[-0.02px] uppercase">{`Featured `}</p>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border-[#959595] border-solid border-t inset-0 pointer-events-none" />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
                    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
                            <HomePComponentsPlacholdersImageImage1 additionalClassNames="h-[240px] w-full" />
                            <HomePContent text="News" text1="Massive Storm Causes Flooding in Parts of Port Elizabeth" text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque lorem..." />
                            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
                              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
                            <HomePComponentsPlacholdersImageImage />
                            <HomePContent text="News" text1="Police Crack Down on Illegal Street Racing in PE" text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque lorem..." />
                            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
                              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
                            <HomePComponentsPlacholdersImageImage2 additionalClassNames="h-[240px] w-full" />
                            <HomePContent text="News" text1="Municipality Announces Major Infrastructure Upgrades for 2025" text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque lorem..." />
                            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
                              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Small Body Link">
                    <div className="flex flex-row items-center size-full">
                      <HomePText2 text="Read more Featured articles" />
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="News Cards">
                  <div className="bg-white relative shrink-0 w-full" data-name="Section Title">
                    <div className="content-stretch flex gap-[10px] items-center overflow-clip pt-[10px] relative rounded-[inherit] w-full">
                      <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32.4px] min-h-px min-w-px relative text-[#09082f] text-[24px] tracking-[-0.02px] uppercase">Sport</p>
                    </div>
                    <div aria-hidden="true" className="absolute border-[#959595] border-solid border-t inset-0 pointer-events-none" />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
                    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
                            <div className="h-[240px] relative shrink-0 w-full" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage8} />
                            </div>
                            <Content />
                            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
                              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
                            <div className="h-[240px] relative shrink-0 w-full" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage9} />
                            </div>
                            <Content />
                            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
                              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Medium Card">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
                            <div className="h-[240px] relative shrink-0 w-full" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage10} />
                            </div>
                            <Content />
                            <div className="relative shrink-0 w-full" data-name="Author Card Footer">
                              <HomePHelper text="Ash Shaw" text1="in" text2="Category" text3="16 hours ago" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Links">
                    <div className="h-[30px] relative shrink-0" data-name="Small Body Link">
                      <div className="flex flex-row items-center size-full">
                        <HomePText2 text="Read more Sports articles" additionalClassNames="h-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <LeaderboardAd />
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[310px]" data-name="Side Column">
                <div className="bg-[#f0f0f0] relative shrink-0 w-[310px]" data-name="Nova E-Editions">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Content">
                        <div className="aspect-[250/362] overflow-clip relative shrink-0 w-full" data-name="Novus Media E-Edition Cover - 1">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNovusMediaEEditionCover1} />
                        </div>
                        <div className="bg-[#3e3e3e] relative rounded-[4px] shrink-0 w-full" data-name="Button Small - Primary">
                          <div className="flex flex-row items-center justify-center size-full">
                            <Text text="Read the latest E-Editions" additionalClassNames="w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#eaeaea] content-stretch flex flex-col gap-[5px] items-center justify-center p-[5px] relative shrink-0" data-name="Advertisement">
                  <div className="bg-[#35713a] relative shrink-0 w-[300px]" data-name="Ad 300 X 250">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative px-[27px] py-[101px] w-full">
                        <p className="font-['Lexend:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[32px] text-white uppercase whitespace-nowrap">{"300 x 250 Ad"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f0f0f0] relative shrink-0 w-full" data-name="Voting Poll">
                  <div aria-hidden="true" className="absolute border-[#959595] border-solid border-t inset-0 pointer-events-none" />
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative w-full">
                      <div className="relative shrink-0 w-full" data-name="Voting Poll">
                        <div className="flex flex-col justify-center size-full">
                          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center p-[10px] relative w-full">
                            <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32.4px] relative shrink-0 text-[#09082f] text-[24px] tracking-[-0.02px] uppercase w-full">Poll</p>
                            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
                              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Content">
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] w-full">What is the most pressing issue facing South Africa today?</p>
                                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Poll Inputs">
                                  <HomePPollInputsText text="Load shedding and energy crisis" />
                                  <HomePPollInputsText text="Crime and law enforcement" />
                                  <HomePPollInputsText text="Unemployment and economic growth" />
                                  <HomePPollInputsText text="Corruption and government accountability" />
                                  <HomePPollInputsText text="Education and skills development" />
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Buttons">
                                <div className="bg-[#3e3e3e] relative rounded-[4px] shrink-0 w-full" data-name="Button Small - Primary">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <Text text="Vote now" additionalClassNames="w-full" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center py-[10px] relative shrink-0 w-[1440px] z-[4]" data-name="Section">
            <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-[1100px]" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Content">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Featured Articles Slider">
                    <div className="bg-white relative shrink-0 w-full" data-name="Section Title">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <HomePText3 text="Recommended Stories" additionalClassNames="gap-[10px]" />
                      </div>
                      <div aria-hidden="true" className="absolute border-[#959595] border-solid border-t inset-0 pointer-events-none" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
                      <Row />
                      <Row />
                    </div>
                    <div className="relative shrink-0" data-name="Small Body Link">
                      <div className="flex flex-row items-center size-full">
                        <HomePText2 text="Read all the Recommended Stories" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[310px]" data-name="Side Column">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Lifestyle, Opinion, Competitions">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Upcoming Events">
                    <div className="bg-white relative shrink-0 w-full" data-name="Section Title">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <HomePText3 text="Business Stories" additionalClassNames="justify-between" />
                      </div>
                      <div aria-hidden="true" className="absolute border-[#959595] border-solid border-t inset-0 pointer-events-none" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Content">
                      <MediumCardHorizontal />
                      <div className="bg-white relative shrink-0 w-full" data-name="Medium Card Horizontal">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-start pb-[10px] relative w-full">
                            <HomePComponentsPlacholdersImageImage1 additionalClassNames="size-[100px]" />
                            <Content1 text="Source:" text1="by" text2="on" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white relative shrink-0 w-full" data-name="Medium Card Horizontal">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-start pb-[10px] relative w-full">
                            <div className="relative shrink-0 size-[100px]" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage} />
                            </div>
                            <Content1 text="Source:" text1="by" text2="on" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white relative shrink-0 w-full" data-name="Medium Card Horizontal">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-start pb-[10px] relative w-full">
                            <HomePComponentsPlacholdersImageImage2 additionalClassNames="size-[100px]" />
                            <Content1 text="Source:" text1="by" text2="on" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white relative shrink-0 w-full" data-name="Medium Card Horizontal">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-start pb-[10px] relative w-full">
                            <div className="relative shrink-0 size-[100px]" data-name="Components/Placholders/Image">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComponentsPlacholdersImage12} />
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Content">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title & Category">
                                <HomePText1 text="Gqeberha constable killed with own service firearm on New Year’s Eve" additionalClassNames="w-full" />
                              </div>
                              <SponsoredSourceLinkBannerText text="Source:" />
                              <AuthorCardFooter1 text="by" text1="on" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <MediumCardHorizontal />
                      <MediumCardHorizontal />
                      <div className="relative shrink-0" data-name="Small Body Link">
                        <div className="flex flex-row items-center size-full">
                          <HomePText2 text="View more business news" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center py-[10px] relative shrink-0 w-full z-[3]" data-name="Section">
            <div className="content-stretch flex gap-[30px] items-center justify-center relative shrink-0 w-[1100px]" data-name="Facebook Communty & Newsletter">
              <div className="flex flex-row items-center self-stretch">
                <div className="bg-[#1a3a5f] h-full relative shrink-0 w-[535px]" data-name="Join Facebook Community">
                  <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[20px] relative size-full">
                      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Title">
                        <div className="relative shrink-0 size-[36px]" data-name="facebook-logo-white">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                            <g id="facebook-logo-white">
                              <path d={svgPaths.p591c8e0} fill="var(--fill-0, white)" id="facebook-logo-white-1" />
                            </g>
                          </svg>
                        </div>
                        <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[24px] text-white tracking-[-0.02px]">Join our community on Facebook</p>
                      </div>
                      <div className="bg-white cursor-pointer h-[40px] relative rounded-[4px] shrink-0 w-[200px]" data-name="Button Small - Secondary">
                        <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <Text1 text="Follow us" additionalClassNames="size-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#09082f] flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="Subscribe to Newsletter">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Title">
                      <div className="relative shrink-0 size-[36px]" data-name="mailpoet-subscribed-to-newsletter-icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                          <g clipPath="url(#clip0_2_2887)" id="mailpoet-subscribed-to-newsletter-icon">
                            <path d={svgPaths.p35a22100} fill="var(--fill-0, white)" id="Vector" />
                            <path d={svgPaths.p524cf00} fill="var(--fill-0, white)" id="Vector_2" />
                            <path d={svgPaths.p1a755e00} fill="var(--fill-0, white)" id="Vector_3" />
                            <path d={svgPaths.p1820480} fill="var(--fill-0, white)" id="Vector_4" />
                            <path d={svgPaths.p3f06cf0} fill="var(--fill-0, white)" id="Vector_5" />
                            <path d={svgPaths.p3ce45a70} fill="var(--fill-0, white)" id="Vector_6" />
                            <path d={svgPaths.p1c9f8180} fill="var(--fill-0, white)" id="Vector_7" />
                            <path d={svgPaths.p1fa7e900} fill="var(--fill-0, white)" id="Vector_8" />
                            <path d={svgPaths.pb86b380} fill="var(--fill-0, white)" id="Vector_9" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_2887">
                              <rect fill="white" height="36" width="36" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[24px] text-white tracking-[-0.02px]">Subscribe to our Newsletter</p>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Input">
                      <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Components/Form/Input">
                        <div className="flex flex-col justify-center size-full">
                          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative size-full">
                            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Input Field">
                              <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
                                <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Input Contents">
                                  <div className="content-stretch flex flex-col items-start relative size-full">
                                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
                                      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#959595] text-[16px] whitespace-nowrap">Email Address</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <HomePButtonSmallSecondaryText text="Sign up" additionalClassNames="w-[120px]" />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#09082f] border-solid inset-0 pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-[1440px] z-[1]" data-name="Novus Media Footer">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center py-[20px] relative w-full">
                <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-[1100px]" data-name="Container">
                  <div className="content-stretch flex items-center justify-between py-[20px] relative shrink-0 w-full" data-name="Newsletter">
                    <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t-4 inset-0 pointer-events-none" />
                    <div className="h-[36px] overflow-clip relative shrink-0 w-[180px]" data-name="Nova_News_Dark">
                      <div className="absolute inset-[19.04%_74.86%_16.72%_13.03%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7955 23.1288">
                          <path d={svgPaths.p28bb4100} fill="var(--fill-0, #09082F)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[19.94%_62.34%_17.62%_25.55%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7969 22.4761">
                          <path d={svgPaths.p345d6eb0} fill="var(--fill-0, #09082F)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[19.94%_51.41%_17.62%_36.54%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6928 22.4761">
                          <path d={svgPaths.p1a0a8900} fill="var(--fill-0, #09082F)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[18.33%_39.62%_16.97%_50.34%]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0717 23.2934">
                          <g id="Group">
                            <path d={svgPaths.p3563f00} fill="var(--fill-0, #D3000D)" id="Vector" />
                            <path d={svgPaths.p35ec2300} fill="var(--fill-0, #D3000D)" id="Vector_2" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[18.33%_27.81%_16.96%_63.85%]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0159 23.2948">
                          <g id="Group">
                            <path d={svgPaths.p8450300} fill="var(--fill-0, #D3000D)" id="Vector" />
                            <path d={svgPaths.p3e3c6600} fill="var(--fill-0, #D3000D)" id="Vector_2" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[18.33%_10.62%_16.97%_73.19%]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1459 23.2948">
                          <g id="Group">
                            <path d={svgPaths.p114e7400} fill="var(--fill-0, #D3000D)" id="Vector" />
                            <path d={svgPaths.pf555980} fill="var(--fill-0, #D3000D)" id="Vector_2" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[17.43%_0.53%_16.24%_90.34%]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4475 23.88">
                          <g id="Group">
                            <path d={svgPaths.p11ff9c80} fill="var(--fill-0, #D3000D)" id="Vector" />
                            <path d={svgPaths.p219fda00} fill="var(--fill-0, #D3000D)" id="Vector_2" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-[2.71%_97.28%_87.62%_0.79%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48187 3.48296">
                          <path d={svgPaths.p1b230c80} fill="var(--fill-0, #549CBE)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[86.6%_88.57%_3.73%_9.5%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48188 3.48296">
                          <path d={svgPaths.p37e0aeb0} fill="var(--fill-0, #549CBE)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[15.93%_88.57%_16.67%_4.37%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7184 24.2668">
                          <path d={svgPaths.p1587b600} fill="var(--fill-0, #09082F)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[15.86%_92.15%_15.9%_0.79%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7184 24.5664">
                          <path d={svgPaths.p19488900} fill="var(--fill-0, #09082F)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0" data-name="IAB & Press Council">
                      <div className="h-[30.095px] overflow-clip relative shrink-0 w-[60px]" data-name="IAB_idY4ZVXpFm_0 2">
                        <div className="absolute contents inset-[0_0_-0.16%_0]" data-name="Group">
                          <div className="absolute inset-[0_0_-0.16%_0]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30.1429">
                              <g id="Group">
                                <path d={svgPaths.p1ab40480} fill="var(--fill-0, #EE3224)" id="Vector" />
                                <path d={svgPaths.p11ca1000} fill="var(--fill-0, #EE3224)" id="Vector_2" />
                                <path d={svgPaths.p3252bc00} fill="var(--fill-0, black)" id="Vector_3" />
                                <path d={svgPaths.p3357adf0} fill="var(--fill-0, black)" id="Vector_4" />
                                <path d={svgPaths.p4667200} fill="var(--fill-0, black)" id="Vector_5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="h-[38.687px] relative shrink-0 w-[60px]" data-name="image 21">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
                      </div>
                      <div className="h-[34.875px] relative shrink-0 w-[128px]" data-name="AVB_230712_20341 FCJ Logo Redesign_Final_NN_V1-02 (1)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAvb23071220341FcjLogoRedesignFinalNnV1021} />
                      </div>
                      <div className="relative shrink-0 size-[40px]" data-name="WAN Ifra lgo 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWanIfraLgo1} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Links">
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative self-stretch shrink-0 w-[140px]" data-name="Content">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">Categories</p>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
                        <HomePFooterLinkText text="Home" />
                        <HomePFooterLinkText text="News" />
                        <HomePFooterLinkText text="Afrikaanse Nuus" />
                        <HomePFooterLinkText text="Schools" />
                        <HomePFooterLinkText text="Sport" />
                        <HomePFooterLinkText text="Business" />
                        <HomePFooterLinkText text="Lifestyle" />
                        <HomePFooterLinkText text="Opinion" />
                        <HomePFooterLinkText text="Recipes" />
                        <HomePFooterLinkText text="E-Editions" />
                        <HomePFooterLinkText text="Supplements" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[30px] items-start overflow-clip relative shrink-0" data-name="Column">
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[201px]">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">Eastern Cape Publications</p>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
                          <HomePFooterLinkText text="About Eastern Cape Region" />
                          <HomePFooterLinkText text="PE Express" />
                          <HomePFooterLinkText text="UD Express" />
                          <HomePFooterLinkText text="Kouga Express" />
                          <HomePFooterLinkText text="Mthatha Express" />
                          <HomePFooterLinkText text="Komani-Karoo Express" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[201px]">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">Novus Sport</p>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
                          <HomePFooterLinkText text="Soccer Laduma" />
                          <HomePFooterLinkText text="Kick Off" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[206px]" data-name="Column">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">Western Cape Publications</p>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
                        <HomePFooterLinkText text="About Western Cape Region" />
                        <HomePFooterLinkText text="Tygerburger" />
                        <HomePFooterLinkText text="People’s Post" />
                        <HomePFooterLinkText text="City Vision" />
                        <div className="relative shrink-0 w-full" data-name="Footer Link">
                          <div className="content-stretch flex items-start py-[4px] relative w-full">
                            <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[#282828] text-[12px]">{`District Mail & Helderburg Gazette`}</p>
                          </div>
                        </div>
                        <HomePFooterLinkText text="Eikestadnuus" />
                        <HomePFooterLinkText text="Paarl Post" />
                        <HomePFooterLinkText text="Swartland Gazette" />
                        <HomePFooterLinkText text="Weslander" />
                        <HomePFooterLinkText text="Weskus Nuus" />
                        <div className="relative shrink-0 w-full" data-name="Footer Link">
                          <div className="content-stretch flex items-start py-[4px] relative w-full">
                            <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[#282828] text-[12px]">{`Worcester Standard & Breederivier Gazette`}</p>
                          </div>
                        </div>
                        <HomePFooterLinkText text="Hermanus Times" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[171px]" data-name="Column">
                      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full whitespace-pre-wrap">
                        <p className="mb-[4px]">{`Free State & Northern `}</p>
                        <p>Cape Publications</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
                        <div className="relative shrink-0 w-full" data-name="Footer Link">
                          <div className="content-stretch flex items-start py-[4px] relative w-full">
                            <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-[#282828] text-[12px]">{`About Free State & Northern Cape Region`}</p>
                          </div>
                        </div>
                        <HomePFooterLinkText text="BloemNuus" />
                        <HomePFooterLinkText text="Bloem Express" />
                        <HomePFooterLinkText text="Vista" />
                        <HomePFooterLinkText text="Noordkaap Bulletin" />
                        <HomePFooterLinkText text="Vrystaat Kroon" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0" data-name="Column">
                      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">About</p>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer Links">
                        <HomePText4 text="Policies" additionalClassNames="items-start py-[4px] shrink-0" />
                        <HomePText4 text="User Rules" additionalClassNames="items-start py-[4px] shrink-0" />
                        <HomePText4 text="Commenting Guidelines" additionalClassNames="items-start py-[4px] shrink-0" />
                        <HomePText4 text="Privacy Policy" additionalClassNames="items-start py-[4px] shrink-0" />
                        <HomePText4 text="Cookie Policy" additionalClassNames="items-start py-[4px] shrink-0" />
                        <HomePText4 text="Press Code" additionalClassNames="items-start py-[4px] shrink-0" />
                        <HomePText4 text="AI Guidelines" additionalClassNames="items-start py-[4px] shrink-0" />
                        <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Link">
                          <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#282828] text-[12px] whitespace-nowrap">{`Terms & Conditions`}</p>
                        </div>
                        <HomePText4 text="POPIA Compliance" additionalClassNames="items-start py-[4px] shrink-0" />
                        <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Link">
                          <div className="font-['Lexend:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#282828] text-[12px] whitespace-nowrap">
                            <p className="mb-0">{`Advertising &`}</p>
                            <p>Sponsorship Guidelines</p>
                          </div>
                        </div>
                        <HomePText4 text="Competition Terms" additionalClassNames="items-start py-[4px] shrink-0" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Credits">
                    <div className="bg-[#ccc] h-px shrink-0 w-full" data-name="Divider" />
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Credits">
                        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[222px]">
                          <div className="relative shrink-0" data-name="Credits">
                            <div className="flex flex-row items-center justify-center size-full">
                              <HomePText4 text="© 2025 Novus Media" additionalClassNames="items-center justify-center" />
                            </div>
                          </div>
                          <div className="relative shrink-0" data-name="Footer Links">
                            <div className="content-stretch flex gap-[20px] items-start relative">
                              <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lexend:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#282828] text-[12px] underline whitespace-nowrap">Policies</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Social Links">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon/Social/facebook">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g id="Icon/Social/facebook">
                                <rect fill="var(--fill-0, #090909)" height="20" rx="10" width="20" />
                                <path d={svgPaths.p21e44d00} fill="var(--fill-0, white)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="relative shrink-0 size-[20px]" data-name="Icon/Social/instagram">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g id="Icon/Social/instagram">
                                <rect fill="var(--fill-0, #090909)" height="20" rx="10" width="20" />
                                <path d={svgPaths.p2096bf00} fill="var(--fill-0, white)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="relative shrink-0 size-[20px]" data-name="Icon/Social/x/twitter">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g id="Icon/Social/x/twitter">
                                <rect fill="var(--fill-0, #090909)" height="20" rx="10" width="20" />
                                <path d={svgPaths.p1cee8600} fill="var(--fill-0, white)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="relative shrink-0 size-[20px]" data-name="Icon/Social/linkedin">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g id="Icon/Social/linkedin">
                                <rect fill="var(--fill-0, #090909)" height="20" rx="10" width="20" />
                                <path d={svgPaths.p1c02e4c0} fill="var(--fill-0, white)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="relative shrink-0" data-name="Credits">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center relative">
                              <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#282828] text-[0px] text-[12px] whitespace-nowrap">
                                <span className="leading-[18px]">{`Developed by `}</span>
                                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.5] underline">LightSpeed WP Agency</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}