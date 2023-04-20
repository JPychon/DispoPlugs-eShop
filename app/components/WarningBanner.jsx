import {Text} from '~/components';

export function WarningBanner({title, description}) {
  return(
      <div id="sticky-banner" tabIndex="-1" className="mb-0 top-0 left-0 z-50 flex justify-between w-full pt-2 pb-0 bg-primary">
          <div className="flex items-center mx-auto">
              <Text className="flex items-center sm:text-xs md:text-xs lg:text-md lg:font-bold text-lightGray xl:font-bold xl:text-md">
                  <span className="text-orange">{title}&nbsp;</span><span>{description}</span>
              </Text>
          </div>
      </div>
  )
}