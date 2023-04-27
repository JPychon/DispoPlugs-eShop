import {Text} from '~/components';

export function WarningBanner({title, description}) {
  return(
      <div className="mb-0 top-0 left-0 z-50 flex w-full pt-2 bg-primary">
          <div className="flex items-center mx-auto">
              <Text className="flex text-center text-lightGray items-center overflow-hidden text-fine font-semibold lg:text-[14px]">
                  <span className="ml-1 text-orange">{title}&nbsp;</span><span>{description}</span>
              </Text>
          </div>
      </div>
  )
}