import Button from "./Button";

interface ServiceHeroActionsProps {
  className: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  primaryClassName?: string;
}

export default function ServiceHeroActions({
  className,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  primaryClassName,
}: ServiceHeroActionsProps) {
  return (
    <div className={className}>
      <Button href={primaryHref} variant="pill" icon="✆" className={primaryClassName}>
        {primaryLabel}
      </Button>
      <Button href={secondaryHref} variant="ghost">
        {secondaryLabel}
      </Button>
    </div>
  );
}
