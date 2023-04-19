import clsx from 'clsx';

export function Input({className = '', type, variant, ...props}) {
  const variants = {
    search:
      'bg-transparent px-0 py-2 text-heading w-full focus:ring-0 border-x-0 border-t-0 transition border-b-2 border-primary/10 focus:border-primary/90',
    minisearch:
      'bg-transparent border-gray rounded hidden md:inline-block text-left lg:text-center border-b transition -mb-px border-x-0 border-t-0 appearance-none px-0 py-1 focus:ring-transparent placeholder:opacity-60 placeholder:text-lightGray',
  };

  const styles = clsx(variants[variant], className);

  return <input type={type} {...props} className={styles} />;
}
