import styles from "@/app/page.module.css"

type PackageDetails = {
  packageName: string;
  price: string;
  details: string[];
};

type ServiceCategory = {
  title: string;
  package: {
    basic: PackageDetails;
    growth: PackageDetails;
    premium: PackageDetails;
  }
};

type Props = {
  service: ServiceCategory;
  id: string;
}

export default function Pricing({ service, id }: Props) {
  return (
    <div className={styles.package} id="pricing">
      <div className={styles.package_title}>
        <h3>{service.title}</h3>
      </div>
      <div className={styles.package_wrapper}>
        {
          Object.entries(service.package).map(([plan, details]) => (
            <div key={plan} className={styles.package_division} id={id}>
              <h4>
                <span>{details.packageName}</span>
                <span> - </span>
                <span>{details.price}</span>
              </h4>
              <ul>
                {details.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  );
}
